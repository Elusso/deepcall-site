<!-- 
  DeepCall Analytics - Clawd Bots
  AI-обзвон 24/7, квалификация кандидатов, Telegram-отчёты
-->

<h1>🤖 Clawd-боты</h1>
<h3>ИИ-обзвон 24/7 — квалификация кандидатов без участия человека</h3>

<p><strong>Clawd-боты</strong> — это автономные ИИ-агенты, которые круглосуточно обзванивают кандидатов по вашим базам, ведут диалог по сценарию, выясняют потребности и отправляют вам отчёт в Telegram. Никакого человеческого фактора. Никаких пропущенных звонков.</p>

<blockquote>
  <p>🎯 <strong>Ключевая идея:</strong> Вы просыпаетесь и видите в Telegram список кандидатов, которые уже подтвердили, что ищут работу и готовы к диалогу. Ваши менеджеры звонят только тем, кто гарантированно заинтересован.</p>
</blockquote>

<hr>

<h2>⚙️ Как это работает (технически)</h2>

<ol>
  <li><strong>Загрузка базы</strong> — вы загружаете список номеров (своя база, наша готовая, слитая — любая) в панель управления.</li>
  <li><strong>ИИ-агент совершает звонок</strong> — система поднимает линию через SIP-транк и запускает голосовой диалог.</li>
  <li><strong>Распознавание речи (ASR)</strong> — Whisper от OpenAI преобразует ответы кандидата в текст в реальном времени.</li>
  <li><strong>Понимание контекста (LLM)</strong> — локальная модель LLaMA 3.2 анализирует ответы и определяет намерения кандидата.</li>
  <li><strong>Синтез речи (TTS)</strong> — XTTS генерирует естественный голос бота (можно выбрать любой тембр).</li>
  <li><strong>Квалификация</strong> — бот выясняет: ищет ли работу? рассматривает ли контракт? готов ли к переговорам?</li>
  <li><strong>Отчёт в Telegram</strong> — все целевые кандидаты моментально отправляются вам в чат с кнопкой "Выгрузить CSV".</li>
</ol>

<hr>

<h2>📊 Реальная статистика работы (март 2026)</h2>

<table style="width: 100%; border-collapse: collapse; background-color: #1a1a1c;">
  <thead>
    <tr style="border-bottom: 1px solid #333;">
      <th style="padding: 12px; text-align: left;">Показатель</th>
      <th style="padding: 12px; text-align: left;">Значение</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 12px;">Всего звонков за месяц (на 1 бота)</td><td style="padding: 12px;"><strong>~8 500</strong></td></tr>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 12px;">Процент дозвонов</td><td style="padding: 12px;"><strong>44,7%</strong></td></tr>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 12px;">Кандидаты, завершившие диалог</td><td style="padding: 12px;"><strong>77% от дозвонов</strong></td></tr>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 12px;">Подтвердили активный поиск работы</td><td style="padding: 12px;"><strong>50,2% от завершивших</strong></td></tr>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 12px;">Средняя длительность разговора</td><td style="padding: 12px;"><strong>42 секунды</strong></td></tr>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 12px;">Экономия времени рекрутера</td><td style="padding: 12px;"><strong>~80 часов в месяц на 1 бота</strong></td></tr>
  </tbody>
</table>

<hr>

<h2>🎛️ Что умеет Clawd-бот</h2>

<ul>
  <li>✅ <strong>Распознаёт речь</strong> — даже с акцентами и фоновым шумом (Whisper ASR)</li>
  <li>✅ <strong>Понимает контекст</strong> — отвечает на вопросы, переспрашивает, уточняет (LLaMA 3.2)</li>
  <li>✅ <strong>Говорит естественно</strong> — 6 голосов на выбор, включая мужские и женские (XTTS)</li>
  <li>✅ <strong>Обрабатывает прерывания</strong> — если кандидат перебил, бот замолкает и слушает</li>
  <li>✅ <strong>Квалифицирует по BANT</strong> — бюджет, полномочия, потребность, сроки</li>
  <li>✅ <strong>Передаёт лида менеджеру</strong> — горячих кандидатов отправляет в Telegram и CRM</li>
  <li>✅ <strong>Работает 24/7</strong> — без выходных, без обедов, без больничных</li>
  <li>✅ <strong>Масштабируется</strong> — от 1 до 1000 ботов в одном кластере</li>
</ul>

<hr>

<h2>📋 Пример сценария разговора</h2>

<blockquote>
  <p><strong>Бот:</strong> Здравствуйте! Меня зовут DeepCall, я виртуальный ассистент кадрового агентства. Вы сейчас активно ищете работу?</p>
  <p><strong>Кандидат:</strong> Да, рассматриваю варианты.</p>
  <p><strong>Бот:</strong> Отлично! Какую заработную плату вы рассматриваете?</p>
  <p><strong>Кандидат:</strong> От 150 тысяч.</p>
  <p><strong>Бот:</strong> Понял. Вы готовы выйти на новое место в течение 14 дней?</p>
  <p><strong>Кандидат:</strong> Да, через неделю могу начать.</p>
  <p><strong>Бот:</strong> Замечательно! Я передам ваш контакт нашему рекрутеру. Он свяжется с вами в ближайшее время. Всего доброго!</p>
</blockquote>

<p><em>Бот фиксирует все ответы и отправляет их вам в структурированном виде.</em></p>

<hr>

<h2>📱 Telegram-отчёт (пример)</h2>

<table style="width: 100%; border-collapse: collapse; background-color: #1a1a1c; font-family: monospace;">
  <thead>
    <tr style="border-bottom: 1px solid #333;">
      <th style="padding: 10px; text-align: left;">Поле</th>
      <th style="padding: 10px; text-align: left;">Значение</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 10px;">📅 Дата</td><td style="padding: 10px;">02.04.2026</td></tr>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 10px;">⏰ Время</td><td style="padding: 10px;">09:42</td></tr>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 10px;">📞 Номер кандидата</td><td style="padding: 10px;">+7 921 456-78-90</td></tr>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 10px;">🟢 Статус</td><td style="padding: 10px;">Целевой (активно ищет)</td></tr>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 10px;">💰 Зарплата</td><td style="padding: 10px;">от 150 000 ₽</td></tr>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 10px;">⏱️ Готовность</td><td style="padding: 10px;">7 дней</td></tr>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 10px;">📎 Действие</td><td style="padding: 10px;">[Выгрузить в CRM] | [Переслать менеджеру]</td></tr>
  </tbody>
</table>

<hr>

<h2>💰 Стоимость настройки и обслуживания</h2>

<table style="width: 100%; border-collapse: collapse; background-color: #1a1a1c;">
  <thead>
    <tr style="border-bottom: 1px solid #333;">
      <th style="padding: 12px; text-align: left;">Услуга</th>
      <th style="padding: 12px; text-align: left;">Цена</th>
      <th style="padding: 12px; text-align: left;">Примечание</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 12px;"><strong>Настройка clawd-бота (под ключ)</strong></td><td style="padding: 12px;"><strong>100 000 ₽</strong></td><td style="padding: 12px;">Разово, включает установку на ваши мощности</td></tr>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 12px;"><strong>Ежемесячное обслуживание</strong></td><td style="padding: 12px;"><strong>15 000 ₽</strong></td><td style="padding: 12px;">Обновление сценариев, техническая поддержка</td></tr>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 12px;"><strong>Телефония (минуты разговора)</strong></td><td style="padding: 12px;"><strong>от 1,5 ₽/мин</strong></td><td style="padding: 12px;">Оплачивается отдельно по факту</td></tr>
  </tbody>
</table>

<hr>

<h2>🚀 Кейс: сербское агентство по набору на производство</h2>

<p><strong>Клиент:</strong> кадровое агентство из Белграда (Сербия), специализируется на подборе персонала для производственных предприятий (сварщики, токари, операторы станков, логисты, комплектовщики).</p>

<p><strong>Задача:</strong> массовый подбор 200+ специалистов для нового завода автокомпонентов в Крагуеваце. Срок — 45 дней.</p>

<p><strong>Исходные данные:</strong></p>
<ul>
  <li>Собрано 24 000 номеров из открытых источников (соцсети, доски объявлений, базы безработных)</li>
  <li>Штат колл-центра клиента — 6 операторов, которые физически не могли обработать такой объём</li>
  <li>Бюджет на подбор — ограничен, наём временных операторов невыгоден</li>
</ul>

<p><strong>Решение:</strong> развернули кластер из <strong>12 clawd-ботов</strong> с сербскими голосами и сценарием под производственные специальности.</p>

<p><strong>Результаты за 30 дней работы:</strong></p>

<table style="width: 100%; border-collapse: collapse; background-color: #1a1a1c;">
  <thead>
    <tr style="border-bottom: 1px solid #333;">
      <th style="padding: 10px; text-align: left;">Показатель</th>
      <th style="padding: 10px; text-align: left;">Значение</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 10px;">Всего обработано номеров</td><td style="padding: 10px;"><strong>24 000</strong></td></tr>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 10px;">Совершено звонков</td><td style="padding: 10px;"><strong>23 100</strong></td></tr>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 10px;">Дозвонов</td><td style="padding: 10px;"><strong>10 300 (44,7%)</strong></td></tr>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 10px;">Кандидаты, завершившие диалог</td><td style="padding: 10px;"><strong>7 930 (77% от дозвонов)</strong></td></tr>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 10px;">Подтвердили активный поиск работы</td><td style="padding: 10px;"><strong>3 980 (50,2% от завершивших)</strong></td></tr>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 10px;">Приглашены на собеседование</td><td style="padding: 10px;"><strong>1 450</strong></td></tr>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 10px;">Вышли на работу</td><td style="padding: 10px;"><strong>218 человек</strong></td></tr>
  </tbody>
</table>

<p><strong>Финансовый результат:</strong></p>
<ul>
  <li>Стоимость найма через ботов: <strong>~850 €</strong> за одного вышедшего специалиста</li>
  <li>Стоимость найма через рекрутеров ранее: <strong>~2 100 €</strong></li>
  <li>Экономия бюджета клиента: <strong>~272 000 €</strong></li>
  <li>Окупаемость внедрения: <strong>3 дня</strong></li>
</ul>

<blockquote>
  <p>📌 <strong>Отзыв клиента (директор агентства, Белград):</strong><br>
  "Мы не верили, что ИИ может заменить живых операторов на сербском языке. Clawd-боты справились лучше: не устают, не ошибаются в скрипте, не забывают перезвонить. За месяц мы закрыли план, на который раньше уходило полгода. Следующий завод — тоже с DeepCall."</p>
</blockquote>

<hr>

<h2>📞 Как подключить clawd-ботов</h2>

<ol>
  <li><strong>Оставьте заявку</strong> — Telegram: <code>@deepcall_support</code></li>
  <li><strong>Подписываем договор и NDA</strong></li>
  <li><strong>Вы предоставляете базу</strong> (или мы формируем под ваш профиль)</li>
  <li><strong>Настраиваем инфраструктуру</strong> — от 2 до 5 дней</li>
  <li><strong>Запускаем обзвон</strong> — первые отчёты в Telegram через 24 часа</li>
  <li><strong>Вы забираете целевых кандидатов</strong> и закрываете вакансии</li>
</ol>

<blockquote>
  <p>🔐 <strong>P.S.</strong> Clawd-боты работают полностью автономно. Вы можете поставить их на свои сервера (мы поможем с настройкой) или арендовать мощности у нас.</p>
</blockquote>

<hr>

<p><strong>DeepCall Analytics — интеллектуальный периметр вашего рекрутинга.</strong></p>