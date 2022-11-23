import {Card} from "../../../../components";
import card_1 from '../../../../images/card_1.png';
import card_2 from '../../../../images/card_2.png';
import card_3 from '../../../../images/card_3.png';
import card_4 from '../../../../images/card_4.png';
import './GoodsList.styles.scss'
import {useNavigate} from "react-router-dom";

export const GoodsInfo = [
    {
        id: 0,
        title: "Warhammer 40,000: Chaos Space Marines",
        time: "60+",
        price: "4500 ₽",
        people: "2+",
        age: "12+",
        picture: card_1,
        description: 'Даже славные космические десантники не защищены от соблазна Хаоса. Со времени возвышения, в темные дни "Ереси Хоруса", или став предателями совсем недавно, эти грозные воины объединяют в себе дары генетический изменений с благословениями тёмных богов и оккультным колдовством. С годами, проведёнными в битвах на стороне Хаоса, они превратились в бесстрашных, сверхчеловеческих разбойников и убийц.\n\n' +
            'Космические Десантники Хаоса (Chaos Space Marines) – это ядро любого боевого формирования Хаоса. Они с лёгкостью уничтожают врагов огнём болтеров как на расстоянии, так и в рукопашном бою, разрывая их с помощью ужасных цепных мечей. Этих парней можно использовать для решения практически любой боевой ситуации, они смогут приспособиться и выполнить поставленную задачу. Сочетая марки и иконы хаоса со смертоносным вооружением, они найдут место в ростере любой армии.\n\n' +
            'Из этого набора вы сможете собрать десять Космических Десантников Хаоса с широким выбором оружия. Внутри есть все необходимые опции, которые предоставляют возможность вооружить каждого члена отряда оружием ближнего боя и болт-пистолетами или болтерами для дальнего боя. Снарядите их чем-то особенным, на ваш выбор: плазмомётом, мелта-ружьём, тяжёлым болтером или ракетной установкой. Чемпиону можно выдать силовой топор, силовую булаву или силовой кулак, а также сменить стандартный болт-пистолет на плазменный. Дополнительные гранаты и аксессуары гарантируют отсутствие двух одинаковых отрядов в вашей армии. Детали набора полностью совместимы с набором Разорителей (Havocs), что позволит смешивать и сочетать тяжёлые орудия и получить ещё больше вариантов сборки.',
        characteristics: 'Пластиковый набор Космических Десантников Хаоса состоит из 144 пластиковых деталей и поставляется с десятью круглыми 32-миллиметровыми подставками.'
    },
    {
        id: 1,
        title: "На марсе",
        time: "80-150",
        price: "8990 ₽",
        people: "1-4",
        age: "13+",
        picture: card_2,
        description: 'Успехи миссий марсоходов – вдохновляющее зрелище, бесспорно. Именно поэтому государства ООН профинансировали создание Департамента операций на Марсе и начали отправлять туда переселенцев. Первые из них прибыли на планету в 2037 году, а сейчас, спустя несколько десятилетий, к процессу колонизации в поисках выгоды подключились и частные компании. Вам предстоит возглавить космическую миссию одной из таких геологоразведочных компаний и создать самую продвинутую колонию на Марсе. Вам необходимо показывать хорошие результаты, выполняя задания Департамента – но главное выполнить тайные цели своей компании.\n\n' +
            'Сперва вам придётся непросто, ведь ваша жизнь будет зависеть от поставок необходимых ресурсов с Земли, а за ними надо будет постоянно путешествовать на орбиту и обратно – но вы сможете строить шахты, электростанции, убежища и другие полезные здания и колония будет становиться более автономной. Главное – найти баланс между добычей того или иного необходимого ресурса. Красная планета ждёт ваших решений!\n\n' +
            '"На Марсе" разработана геймдизайнером Виталом Ласердой, который знаменит своим умением создавать сложные и хорошо сочетающиеся игровые механики. Предыдущие игры Ласерды – это посвящённая виноделию элегантная Vinhos, погружающая в автопром Kanban: Driver\'s Edition и The Gallerist, знакомящая игроков с миром искусства и коллекционирования. "На Марсе" была номинирована на премию The Laurels: Best Architect Games Of 2019 от The Cardboard Republic и уже заслужила горячую любовь и признание поклонников хардкорных стратегий. Это непростое испытание способности выбирать оптимальный вариант, в котором тактика тесно переплетена со стратегией. Широкий спектр возможностей хода позволяет гибко реагировать на изменение игровой ситуации – но главное понять, какая тактика приведёт вас к победе и титулу лучшего колониста. Такое обилие переменных делает игру очень вариативной – и, соответственно, реиграбельной. Каждая новая партия будет уникальной и заставит вас ломать голову снова и снова. Игра рассчитана на компанию до 4 человек включительно. Также есть соло-режим, в котором вам придётся играть против самого Ласерды – вы будете выполнять действия за него, ориентируясь на специальную колоду карт и правила одиночной игры. Выполняйте тайные и явные цели, стройте здания для добычи необходимых ресурсов и идите к победе!',
        characteristics: 'Игровое поле\n' +
            '4 планшета игроков\n' +
            '4 маркера игроков (космонавты)\n' +
            '4 маркера ОВ\n' +
            '16 фигурок роботов\n' +
            '32 маркера улучшенных зданий\n' +
            '48 фигурок колонистов\n' +
            '4 фигурки марсоходов\n' +
            '20 маркеров кораблей\n' +
            '20 фишек прогресса\n' +
            '6 фигурок учёных\n' +
            'Маркер уровня колонии\n' +
            'Маркер шаттла\n' +
            '4 маркера шкалы LSS\n' +
            '5 жетонов начальных зданий\n' +
            '30 жетонов зданий\n' +
            '20 жетонов зданий-убежищ\n' +
            'Планшет заданий\n' +
            '100 жетонов ресурсов\n' +
            '30 кристаллов\n' +
            '8 жетонов исследований\n' +
            '19 жетонов открытий\n' +
            '16 жетонов технологий\n' +
            '4 жетона технологий "Убежище"\n' +
            '3 фишки выполнения миссий\n' +
            'Маркер оставшихся миссий \n' +
            '3 маркера миссий\n' +
            '8 жетонов наград LSS\n' +
            '6 жетонов первых колонистов\n' +
            '12 карт первых колонистов\n' +
            'Планшет учёных\n' +
            '24 карты чертежей\n' +
            '6 карт учёных\n' +
            '12 карт земных контрактов\n' +
            '16 карт личных целей\n' +
            '9 карт миссий\n' +
            '12 карт для одиночной игры\n' +
            '4 памятки\n' +
            'Справочник\n' +
            'Правила игры',
    },
    {
        id: 2,
        title: "Broken Realms: Horrek's Dreadlance",
        time: "60+",
        price: "7350 ₽",
        people: "2+",
        age: "12+",
        picture: card_3,
        description: 'Хотя Кавалеры Империи Оссиарха претендуют на лавры потомков благородной династии, мало что может сравниться с жестокостью, с которой они втаптывают врагов в грязь. С помощью техники Клина Всадников Смерти, которую они довели до совершенства, эти наездники прорываются сквозь ряды врагов и устраивают настоящую резню, чтобы развернуться и вновь влететь в строй на пугающей скорости.\n\n' +
            'Смешайте врагов Нагаша (Nagash) с землёй с помощью дисциплинированных всадников-скелетов. В данном наборе вы найдёте два отряда Кавалеров-Всадников Смерти (Kavalos Deathriders), а также Кавалера-Сеньора (Liege-Kavalos). С помощью правил из книги Broken Realms: Teclis вы сможете использовать данные модели в качестве Ужасного Копья Хоррека (Horrek\'s Dreadlance) – батальона, отображающего элитную кавалерию Хоррека Вензая (Horrek Venzai).',
        characteristics: 'Данный комплект содержит 10 миниатюр Кавалеров-Всадников Смерти и Кавалера-Сеньора. Кавалер-Сеньор в качестве альтернативы может быть собран как Архикавалер Зандтос (Arch-Kavalos Zandtos). Набор включает в себя множество различных опций и аксессуаров.\n\n' +
            'Внутри вы найдёте 240 пластиковых компонентов, а также одну 80-миллиметровую круглую подставку и десять 60-миллиметровых круглых подставок.'
    },
    {
        id: 3,
        title: "Таверна Красный дракон",
        time: "30-60",
        price: "1790 ₽",
        people: "2-4",
        age: "18+",
        picture: card_4,
        description: 'Многие игры рассказывали нам о невероятных приключениях разномастных героев, об их великих подвигах и побеждённых ими злодеях, об опасных подземельях и смертельных ловушках, об ужасных монстрах, схватка с которыми может стоить жизни! Но представьте на секунду, что все невзгоды позади, зло побеждено (по крайней мере временно), а в мешках полно золота… Никогда не задумывались, как наши герои проводят время за кулисами, вне времени своих приключений и подвигов? Как они отдыхают в жестоком фэнтезийном мире и куда отправятся залечивать душевные раны?.. Ответ очень прост, приземлён и реалистичен – в таверну! А лучшая таверна с бесконечными запасами выпивки – таверна "Красный Дракон"!\n\n' +
            'Отправляйтесь в безудержное гулянье, вы это заслужили! Азартные игры, море алкоголя, милые официантки… Только постарайтесь не допиться до чёртиков и сохранить немного золота, а то придётся спать на конюшне, а это героям не к лицу!',
        characteristics: '4 колоды персонажей по 40 карт в каждой \n' +
            '30 карт выпивки \n' +
            '4 планшета игроков \n' +
            '4 жетона стойкости \n' +
            '4 жетона опьянения \n' +
            '50 жетонов золотых монет\n' +
            'Правила игры'
    },
]

export const GoodsList = () => {

    const navigate = useNavigate();

    return (
        <div className="screen2 wrapper wrapper--screen wrapper--last">
            <h1 className="screen-title">Успей купить</h1>
            <div className="screen2__cards">
                {GoodsInfo.map(item => (
                    <Card {...item} onClick={() => navigate(`item/${item.id}`)} />
                ))}
            </div>
        </div>
    )
}