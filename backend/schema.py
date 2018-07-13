import asyncio

import graphene

from sonos import sonos


def convert_to_seconds(duration):
    hours, minutes, seconds = [int(x) for x in duration.split(':')]

    return hours * 3600 + minutes * 60 + seconds



class Song(graphene.ObjectType):
    title = graphene.String(required=True)
    artist = graphene.String(required=True)
    artwork_url = graphene.String(required=True)
    duration = graphene.Int(required=True)
    paused = graphene.Boolean(required=True)
    elapsed = graphene.Int(required=True)


class Query(graphene.ObjectType):
    demo = graphene.String()


class Subscription(graphene.ObjectType):
    on_song_updated = graphene.Field(Song)

    async def resolve_on_song_updated(root, info):
        while True:
            track = sonos.get_current_track_info()
            status = sonos.get_current_transport_info()['current_transport_state']

            duration = track['duration']
            position = track['position']

            yield Song(
                title=track['title'],
                artist=track['artist'],
                artwork_url=track['album_art'],
                paused=status != 'PLAYING',
                duration=convert_to_seconds(duration),
                elapsed=convert_to_seconds(position)
            )

            await asyncio.sleep(1)


schema = graphene.Schema(
    query=Query, subscription=Subscription
)
