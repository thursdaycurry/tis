## Todo

- create prompt factory
- create ai wrapper to avoid ai platform dependency

## 2025-04-14, developed contents summary api

The initial plan was to create a GET API using a URL parameter. However, the URL itself contains query parameter, which can cause confusion-for example: localhost:3000/contents?url=https://news.einfomax.co.kr/news/articleView.html?idxno=4351122. To avoid this ambiguity, it's better to use a POST request instead of GET.

## 2025-04-16, refactor contents summary api

For better architecture, splited contents summarize processing flow into several layers including api handler, ai service, openAiAgent provider.

## 2025-04-16, create tts api

Now, you can create your own audio book containing Buddha's messages.

## 2025-04-19, 반야심경(The Heart Sutra) summary request test

Experiment Results:

- Requested Text: About 1,041 characters of the Heart Sutra
- Processing Time: Approximately 28.44 seconds
- Returned File Size: 1.75 MB
- Audio Length: 1 minute 54 seconds (114 seconds)
- API Cost: $0.03

```
관자재보살이 깊은 반야바라밀다를 수행할 때, 다섯 가지 쌓임(오온)이 모두 공(空)함을 비추어 보고, 온갖 괴로움과 재앙에서 벗어났느니라. 사리자여, 색(물질)은 공과 다르지 않고, 공은 색과 다르지 않으며, 색이 곧 공이요, 공이 곧 색이니, 느낌(수受), 생각(상想), 지어감(행行), 의식(식識) 또한 그러하니라. 사리자여, 이 모든 법은 공하여 나지도 않고, 없어지지도 않으며, 더럽지도 않고, 깨끗하지도 않으며, 늘지도 않고, 줄지도 않느니라. 그러므로 공 가운데는 색도 없고, 느낌, 생각, 지어감, 의식도 없으며, 눈과 귀와 코와 혀와 몸과 뜻도 없으며, 색깔과 소리와 냄새와 맛과 닿음과 법도 없으며, 눈의 경계도 없고, 의식의 경계까지도 없느니라. 무명도 없고, 무명이 다함도 없으며, 늙음과 죽음도 없고, 늙음과 죽음이 다함도 없으며, 괴로움(고苦)과 괴로움의 원인(집集)과 괴로움의 소멸(멸滅)과 괴로움으로 가는 길(도道)도 없으며, 지혜도 없고, 얻음도 없느니라. 얻을 것이 없기 때문에 보살은 반야바라밀다에 의지하여 마음에 걸림이 없고, 걸림이 없으므로 두려움이 없으며, 뒤바뀐 헛된 생각을 멀리 떠나 완전한 열반(究竟涅槃)에 들며, 삼세의 모든 부처님들도 이 반야바라밀다에 의지하여 아뇩다라삼먁삼보리(무상정등정각, 최고의 깨달음)를 이루느니라. 그러므로 알아야 하느니, 반야바라밀다는 위대한 주문이며, 밝은 주문이며, 뛰어난 주문이며, 모든 괴로움을 없애고, 진실하여 헛되지 않음을 알게 하느니라. 그러므로 반야바라밀다의 주문을 말하리라. 주문은 이러하니라: 아제 아제 바라아제 바라승아제 모지 사바하 ( Gate Gate Paragate Parasamgate Bodhi Svaha )
```
