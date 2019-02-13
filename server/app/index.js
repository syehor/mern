import { GraphQLServer } from "graphql-yoga";
import mongoose from "mongoose";

import schema from "./graphql/";
import { models } from "./models/";

// Connect to MongoDB with Mongoose.
mongoose
    .connect(
        'mongodb://mongo:27017/mern-stack',
        {
            useCreateIndex: true,
            useNewUrlParser: true
        }
    )
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

const context = {
    models
};

const server = new GraphQLServer({
    schema,
    context
});

const options = {
    port: process.env.PORT || "4000",
    endpoint: "/graphql",
    playground: "/playground"
};

server.start(options, ({ port }) => {
    console.log(`Server is running on http://localhost:${port}`);
});