import asyncio

import graphene

from sonos import sonos


def convert_to_seconds(duration):
    hours, minutes, seconds = [int(x) for x in duration.split(":")]

    return hours * 3600 + minutes * 60 + seconds


class NextSong(graphene.ObjectType):
    title = graphene.String(required=True)
    artist = graphene.String(required=True)


class Song(graphene.ObjectType):
    title = graphene.String(required=True)
    artist = graphene.String(required=True)
    artwork_url = graphene.String(required=True)
    duration = graphene.Int(required=True)
    paused = graphene.Boolean(required=True)
    elapsed = graphene.Int(required=True)

    next_song = graphene.Field(NextSong)


class Query(graphene.ObjectType):
    demo = graphene.String()


class Subscription(graphene.ObjectType):
    on_song_updated = graphene.Field(Song)

    async def resolve_on_song_updated(root, info):
        while True:
            track = sonos.get_current_track_info()
            status = sonos.get_current_transport_info()[
                "current_transport_state"
            ]

            next_song = sonos.get_queue(
                start=track["playlist_position"], max_items=1
            )

            if len(next_song) == 0:
                next_song = None
            else:
                next_song = next_song.to_dict() if next_song else None
                next_song = (
                    NextSong(
                        artist=next_song["creator"], title=next_song["title"]
                    )
                    if next_song
                    else None
                )

            duration = track["duration"]
            position = track["position"]

            yield Song(
                title=track["title"],
                artist=track["artist"],
                artwork_url=track["album_art"],
                paused=status != "PLAYING",
                duration=convert_to_seconds(duration),
                elapsed=convert_to_seconds(position),
                next_song=next_song,
            )

            await asyncio.sleep(1)


schema = graphene.Schema(query=Query, subscription=Subscription)
