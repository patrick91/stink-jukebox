import asyncio

import graphene


class Song(graphene.ObjectType):
    title = graphene.String(required=True)
    artist = graphene.String(required=True)
    duration = graphene.Int(required=True)


class Query(graphene.ObjectType):
    demo = graphene.String()


class Subscription(graphene.ObjectType):
    on_song_updated = graphene.Field(Song)

    async def resolve_on_song_updated(root, info):
        while True:
            yield Song(
                title='Boom Boom Boom',
                artist='Vengaboys',
                duration=100
            )

            await asyncio.sleep(1)


schema = graphene.Schema(
    query=Query, subscription=Subscription
)
