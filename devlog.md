## Todo

- create prompt factory
- create ai wrapper to avoid ai platform dependency

## 2025-04-14, developed contents summary api

The initial plan was to create a GET API using a URL parameter. However, the URL itself contains query parameter, which can cause confusion-for example: localhost:3000/contents?url=https://news.einfomax.co.kr/news/articleView.html?idxno=4351122. To avoid this ambiguity, it's better to use a POST request instead of GET.

## 2025-04-16, refactor contents summary api

For better architecture, splited contents summarize processing flow into several layers including api handler, ai service, openAiAgent provider.

## 2025-04-16, create tts api

Now, you can create your own audio book containing Buddha's messages.
