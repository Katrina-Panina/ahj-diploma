Ссылка на GitHub Pages](https://katrina-panina.github.io/ahj-diploma/)<br>
[Репозиторий Backend](https://github.com/Katrina-Panina/ahj-diplomabackend.git)

---

# Медиа Органайзер

Сервис для храния и сортировки текстовых данных, ссылок и медифайлов

У данного сервиса имеются следующие функции:

1. Сохранение в истории текстовых сообщений
2. Сохранение в истории ссылок
3. Разметки ссылок в сообщениях
4. Сохранение в истории изображений
5. Сохранение в истории видео-файлов
6. Сохранение в истории аудио-файлов
7. Сохранении в истории любых файлов, не относящихся к вышеуказанным форматам, для последующего скачивания
8. Загрузка изображений и файлов с использованием Drag & Drop
9. «Ленивая» подгрузка. Постепенная подгрузка сообщений (по 10 сообщений) из истории по мере прокрутки ленты сообщений.
10. Синхронизация нескольких открытых Органайзеров между собой, в том числе между отдельными вкладками в рамках одного браузера, так и между отдельными браузерами и устройствами
11. Запись аудио-сообщений с помощью встроенного микрофона
12. Запись видео-сообщений с помощью встроенной веб-камеры
13. Воспроизведение аудио-сообщений
14. Воспроизведение видео-сообщений
15. Прикрепление к сообщению точки геолокации и просмотр отметки с помощью Яндекс.Карт
16. Закрепление сообщений. Сообщение закрепляется сверху ленты сообщений. Одновременно закреплено может быть только одно сообщение
17. Добавление сообщений в избранное и просмотр избранных сообщений
18. Автоматическая сортировка и просмотр сообщений по категориям «Избранное», «Ссылки», «Изображения», «Видео», «Аудио», «Файлы»
19. Удаление сообщений

* сброс серверной части и базы данных спустя 30-60 минут
* время запуска после простоя и поступление первого ответа спустя 10-30 секунд после обращения
* закрытие канала WebSockets спустя 50-60 секунд бездействия
