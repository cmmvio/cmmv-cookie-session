import cmmv from "@cmmv/server";
import _ from "@cmmv/middleware";
import cookieSession from "./index";

const app = cmmv();

app.use(cookieSession( { name: "session", secret: "123" }));

app.get("/", (req, res) => {
    console.log(req.session)
    res.json({Hello: "World"});
})

app.listen({ host: "127.0.0.1", port: 3000})
.then(server => {
    console.log(
        `Listen on http://${server.address().address}:${server.address().port}`,
    );
})
.catch(err => {
    throw Error(err.message);
});