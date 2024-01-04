import { a, defineData, type ClientSchema } from "@aws-amplify/backend";

const schema = a.schema({
  Dummy: a
    .model({
      text: a.string(),
    })
    .authorization([a.allow.public()]),
});

export type Schema = ClientSchema<typeof schema>;
export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 60,
    }
  },
});
