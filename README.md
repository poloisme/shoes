npx sequelize-cli db:migrate => run migrate
curl -X GET "localhost:3333/chatbot/webhook?hub.verify_token=<YOUR_VERIFY_TOKEN>&hub.challenge=CHALLENGE_ACCEPTED&hub.mode=subscribe"
