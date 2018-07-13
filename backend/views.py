import json
from aiohttp import web
from graphql import format_error

from schema import schema
from template import render_graphiql


async def graphql_view(request):
    payload = await request.json()
    response = await schema.execute(
        payload.get("query", ""), return_promise=True
    )

    data = {}

    if response.errors:
        data["errors"] = [format_error(e) for e in response.errors]

    if response.data:
        data["data"] = response.data

    jsondata = json.dumps(data)

    return web.Response(
        text=jsondata, headers={"Content-Type": "application/json"}
    )


async def graphiql_view(request):
    return web.Response(
        text=render_graphiql(), headers={"Content-Type": "text/html"}
    )