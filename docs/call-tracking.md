<!-- 
  DeepCall Analytics - Call Tracking
  Полная документация по продукту
-->

<h1>📞 Call-Tracking Enterprise</h1>
<h3>Отслеживание звонков конкурентов — перехват целевых кандидатов</h3>

<p><strong>Call-Tracking Enterprise</strong> — это флагманский продукт DeepCall Analytics. Система позволяет загружать номера телефонов рекрутеров-конкурентов и автоматически выгружать контакты кандидатов, с которыми они вели диалог дольше <strong>40 секунд</strong>.</p>

<blockquote>
  <p>🎯 <strong>Ключевая идея:</strong> Если конкурент потратил на разговор больше 40 секунд — это целевой кандидат. Вы забираете его себе, не тратя время на холодный обзвон.</p>
</blockquote>

<hr>

<h2>⚙️ Как это работает (технически)</h2>

<ol>
  <li><strong>Загрузка номеров конкурентов</strong> — вы добавляете в систему номера рекрутеров, за которыми хотите следить (до 500 номеров на один аккаунт).</li>
  <li><strong>Пассивный колл-трекинг</strong> — наша сеть виртуальных номеров (1700+ по РФ и СНГ) фиксирует входящие и исходящие вызовы конкурентов через партнёрские SIP-транки.</li>
  <li><strong>Фильтрация по длительности</strong> — алгоритм отсекает звонки короче 40 секунд (спам, ошибочные, нецелевые).</li>
  <li><strong>Деанонимизация номера кандидата</strong> — через обратный колл-трекинг система определяет, с каким именно номером кандидата общался рекрутер.</li>
  <li><strong>Выгрузка в таблицу</strong> — вы получаете готовый список: номер кандидата, длительность разговора, дату и время, статус.</li>
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
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 12px;">Всего отслеживаемых рекрутеров</td><td style="padding: 12px;"><strong>47</strong> (среднее на клиента)</td></tr>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 12px;">Целевых контактов за месяц</td><td style="padding: 12px;"><strong>3 872</strong></td></tr>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 12px;">Перехвачено до закрытия сделки</td><td style="padding: 12px;"><strong>1 104 (28,5%)</strong></td></tr>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 12px;">Средняя длительность разговора у конкурентов</td><td style="padding: 12px;"><strong>1 мин 18 сек</strong></td></tr>
    <tr><td style="padding: 12px;">Экономия времени ваших рекрутеров</td><td style="padding: 12px;"><strong>~40 часов в месяц</strong></td></tr>
  </tbody>
</table>

<hr>

<h2>🎛️ Возможности панели управления</h2>

<ul>
  <li>✅ <strong>Добавление номеров конкурентов</strong> — массовая загрузка через CSV или по одному вручную</li>
  <li>✅ <strong>Автоматическая выгрузка</strong> — Google Sheets, Excel, CSV, CRM (AMO, Bitrix24, Pipedrive)</li>
  <li>✅ <strong>Фильтры по дате, длительности, статусу</strong> — настраиваете, какие звонки считать целевыми</li>
  <li>✅ <strong>Telegram-уведомления</strong> — моментальное оповещение о новом целевом контакте</li>
  <li>✅ <strong>История по каждому рекрутеру</strong> — график активности, динамика целевых звонков</li>
  <li>✅ <strong>Режим "Анти-отслеживание"</strong> — ваши номера автоматически скрываются от систем конкурентов</li>
</ul>

<hr>

<h2>📈 Пример выгрузки (скриншот таблицы)</h2>

<table style="width: 100%; border-collapse: collapse; background-color: #1a1a1c;">
  <thead>
    <tr style="border-bottom: 1px solid #333;">
      <th style="padding: 10px; text-align: left;">Время</th>
      <th style="padding: 10px; text-align: left;">Номер кандидата</th>
      <th style="padding: 10px; text-align: left;">Длительность</th>
      <th style="padding: 10px; text-align: left;">Статус</th>
      <th style="padding: 10px; text-align: left;">Рекрутер (конкурент)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 10px;">15.03 10:32</td><td style="padding: 10px;">+7 921 456-78-90</td><td style="padding: 10px;">124 сек</td><td style="padding: 10px; color: #4ade80;">✅ Целевой</td><td style="padding: 10px;">+7 999 123-45-67</td></tr>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 10px;">15.03 09:47</td><td style="padding: 10px;">+7 912 567-89-01</td><td style="padding: 10px;">89 сек</td><td style="padding: 10px; color: #4ade80;">✅ Целевой</td><td style="padding: 10px;">+7 916 234-56-78</td></tr>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 10px;">14.03 17:20</td><td style="padding: 10px;">+7 905 678-90-12</td><td style="padding: 10px;">42 сек</td><td style="padding: 10px; color: #4ade80;">✅ Целевой</td><td style="padding: 10px;">+7 903 345-67-89</td></tr>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 10px;">14.03 12:15</td><td style="padding: 10px;">+7 911 789-01-23</td><td style="padding: 10px;">38 сек</td><td style="padding: 10px; color: #f87171;">❌ Не целевой</td><td style="padding: 10px;">+7 999 123-45-67</td></tr>
    <tr><td style="padding: 10px;">14.03 11:02</td><td style="padding: 10px;">+7 921 456-78-90</td><td style="padding: 10px;">201 сек</td><td style="padding: 10px; color: #4ade80;">✅ Целевой (повторный)</td><td style="padding: 10px;">+7 916 234-56-78</td></tr>
  </tbody>
</table>

<p><em>Таблица обновляется в реальном времени. Все целевые контакты можно выгрузить одним кликом.</em></p>

<hr>

<h2>💰 Тарифы Call-Tracking</h2>

<table style="width: 100%; border-collapse: collapse; background-color: #1a1a1c;">
  <thead>
    <tr style="border-bottom: 1px solid #333;">
      <th style="padding: 12px; text-align: left;">Тариф</th>
      <th style="padding: 12px; text-align: left;">Отслеживаемых рекрутеров</th>
      <th style="padding: 12px; text-align: left;">Выгрузка целевых</th>
      <th style="padding: 12px; text-align: left;">Цена</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 12px;"><strong>Старт</strong></td><td style="padding: 12px;">до 10</td><td style="padding: 12px;">до 500 в месяц</td><td style="padding: 12px;"><strong>10 000 ₽</strong></td></tr>
    <tr style="border-bottom: 1px solid #2a2a2a;"><td style="padding: 12px;"><strong>Бизнес</strong></td><td style="padding: 12px;">до 50</td><td style="padding: 12px;">до 3 000 в месяц</td><td style="padding: 12px;"><strong>20 000 ₽</strong></td></tr>
    <tr><td style="padding: 12px;"><strong>Корпоративный</strong></td><td style="padding: 12px;">до 500</td><td style="padding: 12px;">безлимит</td><td style="padding: 12px;"><strong>50 000 ₽</strong></td></tr>
  </tbody>
</table>

<hr>

<h2>📞 Как подключить Call-Tracking</h2>

<ol>
  <li><strong>Оставьте заявку</strong> — Telegram: <code>@deepcall_support</code></li>
  <li><strong>Подписываем NDA</strong> — мы не передаём ваши данные третьим лицам</li>
  <li><strong>Вы загружаете номера конкурентов</strong> — через панель или CSV</li>
  <li><strong>Система начинает сбор данных</strong> — первые целевые контакты через 24 часа</li>
  <li><strong>Вы получаете таблицу с кандидатами</strong> — и забираете их раньше конкурентов</li>
</ol>

<blockquote>
  <p>🔐 <strong>P.S.</strong> При покупке подписки ваши номера автоматически вносятся в "белый список" анти-отслеживания. Конкуренты не увидят, что вы мониторите их звонки.</p>
</blockquote>

<hr>

<p><strong>DeepCall Analytics — интеллектуальный периметр вашего рекрутинга.</strong></p>