const artykulyBaza = [
    {
        id: 1,
        tytul: "Utrudnienia w kursowaniu pociągów - STRAJK MASZYNISTÓW. Pociągi zwalniają do 20 km/h!",
        kategoria: "Utrudnienia",
        data: "11 września 2026",
        czasCzytania: "3 min czytania",
        autor: "O5K4R Solutions",
        autorAvatar: "content/akt/O5K4R.png",
        baner: "content/akt/km_s.png",
        trescPelna: `
            <p>Protest maszynistów sparaliżował polską kolej. Pociągi zwalniają do 20 km/h</p>
            
            <p>Ogólnopolski protest maszynistów, zorganizowany przez Związek Zawodowy Maszynistów Kolejowych w Polsce, wywołał poważne utrudnienia i opóźnienia w ruchu pociągów na terenie całego kraju. Akcja protestacyjna jest bezpośrednim pokłosiem tragicznej katastrofy kolejowej w Sokolnikach Suchych, gdzie pociąg pasażerski zderzył się z samochodem ciężarowym, co doprowadziło do wykolejenia składu, śmierci pasażerki oraz obrażeń u innych osób, w tym maszynisty.</p>

            <div class="my-8 rounded-2xl overflow-hidden shadow-md border border-slate-200">
                <img src="content/akt/thumbnails.webp" alt="Katastrofa kolejowa - Sokolniki Suche" class="w-full object-cover">
                <p class="p-3 bg-slate-50 text-xs text-center text-[#86868b]">Źródło zdjęcia: <b>https://polskieradio24.pl</b></p>
            </div>

            <h3 class="font-heading text-xl font-bold text-[#1d1d1f] mt-6 mb-3">Przebieg protestu:</h3>
            <p>Zgodnie z decyzją Rady Krajowej ZZM, maszynistów wezwano do prowadzenia pociągów przez wszystkie przejazdy kolejowo-drogowe z prędkością maksymalną do 20 km/h.</p>

<h3 class="font-heading text-xl font-bold text-[#1d1d1f] mt-6 mb-3">Skala opóźnień:</h3>
            <p>Akcja objęła tysiące składów pasażerskich i towarowych. W godzinach porannych punktualność pociągów drastycznie spadła, a łączny czas opóźnień na sieci liczył tysiące minut. Największe straty czasowe odnotowały wybrane połączenia dalekobieżne (m.in. relacji Zakopane – Świnoujście czy Gdynia – Praga), gdzie opóźnienia sięgały od kilkudziesięciu minut do ponad trzech godzin.</p>

<h3 class="font-heading text-xl font-bold text-[#1d1d1f] mt-6 mb-3">Reakcja rządzących:</h3>
            <p>Ministerstwo Infrastruktury uznało formę protestu za zbyt radykalną, wskazując na ogromne uderzenie w pasażerów. Jednocześnie szef resortu, Dariusz Klimczak, zadeklarował pilne podjęcie rozmów ze środowiskiem kolejarskim oraz rozpoczęcie prac nad ustawą regulującą czas pracy maszynistów.</p>

            <p class="mt-4">Związkowcy podkreślają, że akcja jest głosem sprzeciwu wobec rosnącej liczby niebezpiecznych zdarzeń na przejazdach oraz braku skutecznych mechanizmów chroniących życie pracowników i podróżnych. Mimo że pierwotnie protest miał potrwać przez całą dobę, związek zdecydował o jego skróceniu do południa, licząc na przejście od zapowiedzi do realnych zmian legislacyjnych i infrastrukturalnych. Sytuacja na torach stopniowo wraca do normy, jednak stabilizacja rozkładów jazdy może zająć wiele godzin.</p>
        <p class="mt-4">Informacje o aktualnych utrudnieniach i opóźnieniach można znaleźć na <a href="https://portalpasazera.pl/Opoznienia" class="text-blue-600 font-semibold hover:underline">portalu pasażera PKP PLK S.A.</a></p>
        `
    },
    {
        id: 2,
        tytul: "WARSZAWA: Uwaga kierowcy i pasażerowie: Weekendowe zamknięcie południowej jezdni ul. Górczewskiej. Zmiany w kursowaniu autobusów",
        kategoria: "Utrudnienia",
        data: "11 września 2026",
        czasCzytania: "5 min czytania",
        autor: "O5K4R Solutions",
        autorAvatar: "content/akt/O5K4R.png",
        baner: "content/akt/Gorczewska_zmiany.png",
        trescPelna: `
            <p>W najbliższy weekend mieszkańcy Warszawy, a w szczególności Bemowa, muszą przygotować się na utrudnienia w ruchu drogowym. W związku z zamknięciem południowej jezdni ul. Górczewskiej, od piątku, 11 września od godziny 22:00 do niedzieli, 13 września do godziny 23:55, drastycznie zmienią się trasy kilkunastu linii autobusowych.</p>
            
            <p>Prace i związane z nimi utrudnienia wymusiły wprowadzenie tymczasowej organizacji ruchu oraz zmian w kursowaniu komunikacji miejskiej. Zmiany obejmą linie dzienne oraz nocne.</p>

            <div class="my-8 rounded-2xl overflow-hidden shadow-md border border-slate-200">
                <img src="content/akt/gorczewska.png" alt="Zmiany na górczewskiej" class="w-full object-cover">
                <p class="p-3 bg-slate-50 text-xs text-center text-[#86868b]">Mapia zmian - Źródło zdjęcia: <b>https://wtp.waw.pl</b></p>
            </div>

            <h3 class="font-heading text-xl font-bold text-[#1d1d1f] mt-6 mb-3">Jak pojadą autobusy?</h3>
            <p>Zmiany tras dotkną następujących linii:</p>
         <ul class="list-disc pl-6 space-y-2">
                <li><b>105, 122, 189:</b> Zostaną skierowane na trasę zmienioną do ul. Lazurowej, skąd przez zawrotkę na Rondzie Radia Wolna Europa pojadą z powrotem do tymczasowego krańca Os. Górczewska 51.</li>
                <li><b>177, 743, N42:</b> Zakończą swoje trasy na tymczasowym krańcu Klemensiewicza 02.</li>
                <li><b>149, 714, 719, 729 (tylko w kierunku krańca Metro Bemowo):</b> Pojedzie objazdem przez Rondo Radia Wolna Europa, ul. Lazurową, Człuchowską i Powstańców Śląskich do przystanku Czumy 02. W kierunku przeciwnym trasa pozostaje bez zmian.</li>
                <li><b>167 (tylko w kierunku siekierki-Sanktuarium):</b> Skierowane zostanie ulicami Radiową, Powstańców Śląskich i Górczewską.</li>
                <li><b>190:</b> Będzie kursować wyłącznie na trasie podstawowej Ch Marki – Znana (zawieszone zostają kursy wydłużone do os. Górczewska).</li>
            </ul>

            <h3 class="font-heading text-xl font-bold text-[#1d1d1f] mt-6 mb-3">Zmiany przystankowe i rozkładowe</h3>
         <ul class="list-disc pl-6 space-y-2">
                <li><b>Zawieszone przystanki:</b> Nie będzie możliwe korzystanie z przystanków Os. Górczewska 03 oraz 53.</li>
                <li><b>Przystanek zastępczy:</b> Uruchomiony zostaje przystanek Os. Górczewska 51, zlokalizowany na ul. Lazurowej (tu za przystankiem Os. Górczewska 01), który posłuży jako krańcowy dla linii 105, 122 i 189.</li>
            </ul>
            <p class="mt-4">Pasażerowie powinni zwrócić uwagę na zaktualizowane rozkłady jazdy obowiązujące w dniach 12–13 września oraz w nocy z 11/12 i 12/13 września. Organizator transportu przeprasza za wszelkie niedogodności i zachęca do wcześniejszego sprawdzania tras w aplikacjach mobilnych oraz na stronie <a href="https://www.wtp.waw.pl" class="text-blue-600 font-semibold hover:underline">WTP</a>.</p>
        `
    },
        {
        id: 3,
        tytul: "POZNAŃ: Nowy przystanek „Os. Dębina” dla pasażerów autobusów linii nr 171, 176 i 215",
        kategoria: "Aktualności",
        data: "11 września 2026",
        czasCzytania: "2 min czytania",
        autor: "O5K4R Solutions",
        autorAvatar: "content/akt/O5K4R.png",
        baner: "content/akt/poznan_zmiany_nowa.png",
        trescPelna: `
            <p>Zarząd Transportu Miejskiego w Poznaniu poinformował o uruchomieniu nowego punktu zatrzymania dla pojazdów komunikacji miejskiej. Zmiany wejdą w życie w najbliższy poniedziałek, 14 września 2026 roku, i obejmą trzy popularne linie autobusowe: 171, 176 oraz 215.</p>
            
            <p>Od poniedziałku pasażerowie korzystający z sieci ZTM w Poznaniu zyskają udogodnienie w rejonie osiedla Dębina. Na ulicy 28 Czerwca 1956 r. oficjalnie zacznie funkcjonować nowy przystanek oznaczony jako Os. Dębina 04.</p>

            <h3 class="font-heading text-xl font-bold text-[#1d1d1f] mt-6 mb-3">Gdzie dokładnie zlokalizowany jest nowy przystanek?</h3>
            <p>Infrastruktura została ulokowana w dogodnym punkcie – pomiędzy dotychczasową zatoką postojową dla autobusów a łącznikiem usytuowanym przy pobliskiej stacji benzynowej.</p>

            <h3 class="font-heading text-xl font-bold text-[#1d1d1f] mt-6 mb-3">Jak będzie funkcjonował?</h3>
            <p>Zgodnie z wytycznymi ZTM, nowo otwarty przystanek Os. Dębina 04 będzie pełnił podwójną funkcję:</p>
         <ul class="list-disc pl-6 space-y-2">
                <li><b>Przystanku początkowego</b> – dla pojazdów, które rozpoczynają swoje kursy bezpośrednio z pętli Os. Dębina,</li>
                <li><b>Przystanku przelotowego</b> – dla autobusów poruszających się od strony Lubonia.</li>
            </ul>
            <p class="mt-4">Jednocześnie organizator transportu zwrócił uwagę na korektę roli dotychczasowego przystanku. Miejsce oznaczone dotychczas jako <b>Os. Dębina 02</b> od momentu wprowadzenia zmian stanie się w pełni przystankiem przelotowym.
Nowa inwestycja ma na celu usprawnienie ruchu pasażerskiego w tym rejonie oraz lepsze dopasowanie układu komunikacyjnego do potrzeb osób podróżujących z i w kierunku południowych obrzeży Poznania oraz Lubonia.</p>
        `
    }
];
