# Тестовое задание от Mauris

Реализовать React Native или mobile first React приложение соответствующее критериям приведенным ниже.
- Стартовый экран приложения содержит календарь.
- По нажатию на день в календаре пользователю отображается экран со списком эпизодов.
---
### Критерии приемки.
1. Наличие ссылки на git репозиторий содержащий исходный код задания.
2. Наличие отдельного блока в файле README.md с указанием какие из пунктов текущего задания подлежат проверке. 
3. Пользовательский интерфейс должен содержать элементы, представленные на макетах. 
https://drive.google.com/drive/folders/1Pk2tdkPJbDKoal--aR898wPD_SlnSnKN?usp=sharing 
Полная реализация дизайна будет дополнительным плюсом. Адаптировать необходимо только под мобильные устройства. Реализовывать desktop версию нет необходимости. 
4. Подключение и реализация поведения для источника данных - https://www.tvmaze.com/api#schedule  (country=US) будет дополнительным плюсом.  
5. Реализация отображения original изображения по нажатию на medium будет дополнительным плюсом.
6. В случае web приложения наличие ссылки на развернутую версию либо инструкции по сборке в отдельном блоке файла README.md репозитория, с указанием версий необходимого для развертывания ПО.
7. В случае React Native приложения ссылка на apk файл или инструкция по сборке  в отдельном блоке файла README.md репозитория, с указанием версий необходимого для развертывания ПО. При наличии возможности предоставление доступа к iOS версии (если отсутствует опыт или необходимое окружение для сборки под iOS - не тратьте время, на рабочем месте обучим и предоставим все необходимое).
---
### Подлежит проверке
- (п.3) Пользовательский интерфейс
- (п.4) Подключение и реализация поведения для источника данных
- (п.5) Реализация отображения original изображения по нажатию на medium
- (п.7) ссылка на apk файл или инструкция по сборке
---
#### ссылка на apk файл:
 https://github.com/Adisey/p904-TV_series_calendar-raect_native-Mauris/blob/master/android/app/release/app-release.apk

#### инструкция по сборке
* \android\gradlew.bat assembleRelease _(_Либо_ _из_ _интерфеёса_ _phpStorm_)_
* [Создаём keystore _(_Из_ _интефейса_ _Android_ _Studio_)_] _(_Если_ _ещё_ _нет_)_
* Подписываем APK (\android\app\build\outputs\apk\release\app-release-unsigned.apk) _(_Из_ _интефейса_ _Android_ _Studio_)_
* Подписанный релиз _(android\app\release\app-release.apk)_ можно выкладывать на телефон.
---
![Главная страница](https://github.com/Adisey/p904-TV_series_calendar-raect_native-Mauris/blob/master/demo/main.png)
![Отображение эпизодов на выбранный день](https://github.com/Adisey/p904-TV_series_calendar-raect_native-Mauris/blob/master/demo/showday.png)
![Оригинальная картинка эпизода](https://github.com/Adisey/p904-TV_series_calendar-raect_native-Mauris/blob/master/demo/showoriginal.png)

---
##### PS: Что бы ещё сделал, что бы отдать жене для пользования. ;)
1. Обернул бы стейт в Redux.
2. Вынес бы на интерфейс насройку выбора страны.
3. На основной странице, отображал бы в календарике, наличие сериалов по датам.
4. По отдельной (i) кнопке, на отдельной странице, выводил бы полное описание сериала.
5. По отдельной (с) кнопке, на отдельной странице, выводил бы календарь сериала. 
