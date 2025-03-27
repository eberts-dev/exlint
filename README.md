# exlint - react project

Структура проекта (кратко)

```
src/
├── app/                  # Основная логика приложения
├── assets/               # Статические файлы (изображения, шрифты)
├── components/           # Переиспользуемые компоненты
│   ├── ide/              
│   ├── layout/           # глобальные компоненты
│   │   ├── Header/
│   │   └── Footer/ 
│   ├── main/             # основные компоненты
│   ├── menu/             # меню
│   │   └──auth/          # авторизация
│   ├── modal/            # модальные окна
│   ├── ui/               # ui компоненты
│   └── Sprite.jsx        # спрайты 
├── config/               # конфиг для переиспользуемых ссылок/кнопок  
├── data/                 # моковые данные
├── features/             # Функциональные модули
├── hooks/                # Кастомные хуки
├── styles/               # Глобальные стили, переменные, миксины
├── App.jsx               # основной файл приложения
├── main.jsx              # корневой root
└── vite.config.js       # конфиг алиасов под проект

```
