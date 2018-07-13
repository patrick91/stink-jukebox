import asyncio
import json

import aiohttp_cors
from aiohttp import web
from graphql_ws.aiohttp import AiohttpSubscriptionServer

from schema import schema
from views import graphiql_view, graphql_view

subscription_server = AiohttpSubscriptionServer(schema)


async def subscriptions(request):
    ws = web.WebSocketResponse(protocols=("graphql-ws",))
    await ws.prepare(request)

    await subscription_server.handle(ws)

    return ws


app = web.Application()
app.router.add_get("/subscriptions", subscriptions)
app.router.add_get("/graphiql", graphiql_view)
app.router.add_get("/graphql", graphql_view)
app.router.add_post("/graphql", graphql_view)

cors = aiohttp_cors.setup(
    app,
    defaults={
        "*": aiohttp_cors.ResourceOptions(
            allow_credentials=True, expose_headers="*", allow_headers="*"
        )
    },
)

for route in list(app.router.routes()):
    cors.add(route)


web.run_app(app, port=8000)
