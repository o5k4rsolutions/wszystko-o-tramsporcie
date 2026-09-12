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
                <p class="p-3 bg-slate-50 text-xs text-center text-[#86868b]">Źródło zdjęcia: <b>https://www.polskieradio24.pl</b></p>
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
                <p class="p-3 bg-slate-50 text-xs text-center text-[#86868b]">Mapia zmian - Źródło zdjęcia: <b>https://www.wtp.waw.pl</b></p>
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
    },
    {
        id: 4,
        tytul: "OSTROŁĘKA: Kolej wraca na trasę z Ostrołęki do Warszawy. Znamy szczegóły i harmonogram modernizacji!",
        kategoria: "Utrudnienia",
        data: "11 września 2026",
        czasCzytania: "2 min czytania",
        autor: "O5K4R Solutions",
        autorAvatar: "content/akt/O5K4R.png",
        baner: "content/akt/20240319090536PLK20230602Po22latachwracajapociagizOstrolekidoChorzelWidoknanowyperonitornastacjiOstrolekaoraznowetabliceinformacyjneznazwastacjiikierunkiemjazdyfot.jpg_687-443.jpg",
        trescPelna: `
            <p>Połączenia kolejowe między Ostrołęką a Warszawą od lat są jednym z najważniejszych tematów dyskusji wśród mieszkańców północnego Mazowsza. Trwająca modernizacja infrastruktury torowej ma jednak przynieść długo wyczekiwany przełom. Zgodnie z najnowszymi informacjami, prace zmierzają do finału, a pasażerowie w niedalekiej przyszłości znów będą mogli wygodnie podróżować pociągiem do stolicy.</p>
            
            <h3 class="font-heading text-xl font-bold text-[#1d1d1f] mt-6 mb-3">Harmonogram prac: Kiedy powrót pociągów?</h3>
            <p>Kluczowe dla całej inwestycji są terminy zakończenia prac budowlanych oraz wdrożenia nowego rozkładu jazdy:</p>
            <ul class="list-disc pl-6 space-y-2">
                <li><b>Koniec prac torowych:</b> Zakończenie zasadniczych prac modernizacyjnych na linii zaplanowano na grudzień 2026 roku.</li>
                <li><b>Start połączeń:</b> Nowe składy – w tym planowane pociągi dalekobieżne oraz regionalne – mają wyruszyć na trasę łączącą Warszawę, Ostrołękę i Łomżę w czerwcu 2027 roku.</li>
            </ul>

 <div class="my-8 rounded-2xl overflow-hidden shadow-md border border-slate-200">
                <img src="content/akt/foto.jpg" alt="Stacja Ostrołęka" class="w-full object-cover">
                <p class="p-3 bg-slate-50 text-xs text-center text-[#86868b]">Wizualizacja stacji Ostrołęka w województwie Mazowieckim</b></p>
            </div>

            <h3 class="font-heading text-xl font-bold text-[#1d1d1f] mt-6 mb-3">Rewolucja w czasie przejazdu – Warszawa w zasięgu 80 minut</h3>
            <p>Głównym celem trwających prac jest nie tylko przywrócenie ruchu, ale przede wszystkim drastyczne skrócenie czasu podróży. Z zapowiedzi ekspertów i polityków zaangażowanych w projekt wynika, że po zakończeniu inwestycji przejazd pociągiem z Ostrołęki do Warszawy ma zająć około 80 minut.</p>
            <p>Tak znaczne skrócenie czasu jazdy całkowicie zmieni mobilność mieszkańców regionu. Otworzy to perspektywy łatwiejszego dojazdu do warszawskiego rynku pracy, stołecznych uczelni oraz portów lotniczych, co dla wielu osób stanowi kluczowy argument przemawiający za rozwojem transportu szynowego.</p>

        <h3 class="font-heading text-xl font-bold text-[#1d1d1f] mt-6 mb-3">Co zmieni się na torach?</h3>
            <p>Modernizacja linii kolejowej niesie za sobą szerszą ofertę przewozową. Oprócz tradycyjnych połączeń regionalnych, na trasie pojawić się mają także składy dalekobieżne (m.in. planowane relacje obsługiwane przez PKP Intercity w ujęciu Warszawa–Ostrołęka–Łomża). Dla samej Ostrołęki oznacza to wzmocnienie jej roli jako istotnego węzła kolejowego w tej części województwa mazowieckiego.</p>
            <p>Choć na ostateczny efekt i moment, w którym pociągi znowu zabiorą pasażerów w kierunku Warszawy, trzeba będzie poczekać do połowy 2027 roku, tempo prowadzonych prac budowlanych daje solidne podstawy do optymizmu. Mieszkańcy regionu z niecierpliwością odliczają miesiące do chwili, gdy kolej na dobre powróci na tę strategiczną trasę.</p>
        `
    },
    {
        id: 5,
        tytul: "ŁÓDŹ: Zmiany w trasach łódzkich autobusów. MPK wprowadza objazdy dla linii 97A i 97B",
        kategoria: "Utrudnienia",
        data: "11 września 2026",
        czasCzytania: "2 min czytania",
        autor: "O5K4R Solutions",
        autorAvatar: "content/akt/O5K4R.png",
        baner: "content/akt/csm_mpk-lodz-linia-67-do-orientarium__1__422bf3aade.jpg.webp",
        trescPelna: `
            <p>Miejskie Przedsiębiorstwo Komunikacyjne w Łodzi opublikowało komunikat dotyczący tymczasowej zmiany trasy autobusów obsługujących linie 97A oraz 97B. Korekta trasy wiąże się z koniecznością ominięcia wyznaczonego fragmentu drogi i dotyczy konkretnego sposobu przejazdu w rejonie alei Bandurskiego oraz ulicy Maratońskiej.</p>
            
            <h3 class="font-heading text-xl font-bold text-[#1d1d1f] mt-6 mb-3">Jak pojadą autobusy?</h3>
            <p>Zgodnie z przekazanymi informacjami, autobusy linii 97A i 97B (poruszające się w określonym kierunku) dojadą do skrzyżowania al. Bandurskiego z ul. Maratońską bez zmian, jednak dalsza część ich trasy będzie wyglądać inaczej niż na co dzień:</p>
            <ul class="list-disc pl-6 space-y-2">
                <li>Pojazdy pojadą aleją Bandurskiego, gdzie zawrócą na rondzie Maleszewskiej.</li>
                <li>Następnie skierują się w południowy wjazd do ulicy Maratońskiej.</li>
                <li>Stamtąd wrócą na swoją stałą trasę ulicą Maratońską.</li>
            </ul>

 <div class="my-8 rounded-2xl overflow-hidden shadow-md border border-slate-200">
                <img src="content/akt/f3af13c3-00a4-441b-9036-3e3616a4b2f0.webp" alt="Autobus Solaris ŁÓDŹ" class="w-full object-cover">
                <p class="p-3 bg-slate-50 text-xs text-center text-[#86868b]">Autobus solaris - MPK Łódź</b></p>
            </div>

            <h3 class="font-heading text-xl font-bold text-[#1d1d1f] mt-6 mb-3">Udogodnienia i zmiany przystankowe</h3>
            <p>W związku z objazdem pasażerowie muszą liczyć się z korektami w obsłudze przystanków. Warto zwrócić uwagę na kluczową zmianę: autobusy linii 97A oraz 97B na trasie objazdowej zatrzymają się na przystanku <b>Bandurskiego – Atlas Arena (nr 1772)</b>.</p>
             <p class="mt-4">Więcej szczegółów na temat bieżących utrudnień oraz pełne rozkłady jazdy można sprawdzić bezpośrednio na stronie internetowej <a href="https://www.mpk.lodz.pl" class="text-blue-600 font-semibold hover:underline">MPK-Łódź</a> oraz pod całodobowym numerem telefonu informacyjnego ZDiT / MPK. Pasażerowie planujący podróż w tym rejonie powinni wziąć pod uwagę ewentualne, niewielkie korekty w czasie przejazdu.</p>
            `
    },
        {
        id: 6,
        tytul: "KRAKÓW: Zmiany w komunikacji miejskiej w Krakowie: Trasa linii 143 skrócona z powodu prac na ul. Zarzyckiego",
        kategoria: "Utrudnienia",
        data: "11 września 2026",
        czasCzytania: "1 min czytania",
        autor: "O5K4R Solutions",
        autorAvatar: "content/akt/O5K4R.png",
        baner: "content/akt/143-krako.png",
        trescPelna: `
            <p>Zarząd Transportu Publicznego w Krakowie (ZTP) poinformował o nadchodzących utrudnieniach w funkcjonowaniu Komunikacji Miejskiej w Krakowie (KMK). W związku z realizacją kolejnego etapu robót drogowych na ul. Zarzyckiego, od poniedziałku, 14 września 2026 roku, pasażerów korzystających z linii autobusowej nr 143 czekają zmiany w trasie przejazdu.</p>
            
            <h3 class="font-heading text-xl font-bold text-[#1d1d1f] mt-6 mb-3">Najważniejsze zmiany dla pasażerów:</h3>
            <ul class="list-disc pl-6 space-y-2">
                <li><b>Trasa czasowo zmieniona (skrócona):</b> Autobusy linii 143 będą kursować na skróconej trasie: Podgórze SKA – Jasieńskiego.</li>
                <li><b>Wyłączony przystanek:</b> Przystanek Kokotów SKA 02 pozostanie bez obsługi.</li>
                <li><b>Nowe rozkłady jazdy:</b> Wprowadzone zostaną zmodyfikowane rozkłady jazdy dla tej linii.</li>
            </ul>

           <p class="mt-4">Osoby podróżujące w tym rejonie powinny zapoznać się z nowym rozkładem jazdy przed wyruszeniem w drogę oraz uwzględnić czasowe zmiany w organizacji ruchu. Organizator transportu przeprasza za wszelkie niedogodności związane z prowadzonymi pracami budowlanymi.</p>
            `
    },
            {
        id: 7,
        tytul: "WARSZAWA: Utrudnienia w kursowaniu autobusów linii 518 w Warszawie",
        kategoria: "Utrudnienia",
        data: "11 września 2026",
        czasCzytania: "1 min czytania",
        autor: "O5K4R Solutions",
        autorAvatar: "content/akt/O5K4R.png",
        baner: "content/akt/518-utrudnienia.png",
        trescPelna: `
            <p>W czwartek, 11 września 2026 roku, pasażerowie korzystający z usług Warszawskiego Transportu Publicznego muszą liczyć się z nagłymi utrudnieniami. Powodem problemów w kursowaniu komunikacji miejskiej jest zgromadzenie publiczne, które odbywa się przed gmachem przy ul. Bielańskiej 12.</p>

<p>Sytuacja ta zmusiła służby ruchu do wprowadzenia zmian w trasie popularnej linii autobusowej <b>518</b>. Zmiany dotyczą kursów w obu kierunkach:</p>

            <ul class="list-disc pl-6 space-y-2">
                <li><b>W kierunku krańca Bielańska:</b> Autobusy od skrzyżowania Pl. Bankowy / Al. Solidarności / Andersa zostały skierowane na trasę objazdową prowadzącą prosto ulicą Andersa do przystanku <i>METRO RATUSZ ARSENAŁ 02</i>.</li>
                <li><b>W kierunku Nowodworów:</b> Trasa objazdowa wiedzie od przystanku <i>METRO RATUSZ ARSENAŁ 02</i> ulicami: Andersa – Nowolipki – Zamenhofa – Anielewicza – Andersa – Pl. Bankowy – Senatorska – Miodowa, skąd autobusy wracają na swoją stałą trasę.</li>
            </ul>

<h3 class="font-heading text-xl font-bold text-[#1d1d1f] mt-6 mb-3">Zasady zatrzymywania się na objazdach:</h3>
<p>ZTM informuje, że na wyznaczonych trasach objazdowych obowiązują przystanki: pierwsze napotkane jako stałe, natomiast pozostałe funkcjonują jako warunkowe <b>(na żądanie)</b>.</p>

           <p class="mt-4">Organizator transportu przeprasza pasażerów za wszelkie niedogodności i zaleca wcześniejsze sprawdzanie aktualnych połączeń oraz planowanie podróży z zapasem czasu.</p>
            `
    },
     {
        id: 8,
        tytul: "Warszawa stanie się stolicą światowego transportu! Już wkrótce Dni Transportu Publicznego 2026 i Mistrzostwa Motorniczych",
        kategoria: "Aktualności",
        data: "11 września 2026",
        czasCzytania: "7 min czytania",
        autor: "O5K4R Solutions",
        autorAvatar: "content/akt/O5K4R.png",
        baner: "content/akt/dtp-baner.png",
        trescPelna: `
            <p>W sobotę, 19 września 2026 roku, serce Warszawy zamieni się w wielkie miasteczko mobilności. Pod Pałacem Kultury i Nauki, na nowo otwartym Placu Centralnym, odbędą się tegoroczne Dni Transportu Publicznego (DTP), połączone z prestiżowymi, międzynarodowymi mistrzostwami motorniczych. Na mieszkańców i miłośników komunikacji miejskiej czeka mnóstwo atrakcji.</p>

<h3 class="font-heading text-xl font-bold text-[#1d1d1f] mt-6 mb-3">Światowa elita motorniczych na Marszałkowskiej</h3>
<p>Głównym punktem programowym tegorocznych DTP będą zmagania w ramach zawodów motorniczych (World Tramdriver Championship / TRAM-EM). Do Warszawy zjeżdzają się reprezentacje motorniczych nie tylko z Polski, ale także z całej Europy i dalekich zakątków świata (m.in. z Australii). Gospodarzy reprezentować będzie stołeczna drużyna, a obok niej wystąpi m.in. zespół MZK Gorzów Wielkopolski – zwycięzca krajowych mistrzostw.</p>

<div class="my-8 rounded-2xl overflow-hidden shadow-md border border-slate-200">
                <img src="content/akt/tram-em.jpg" alt="Autobus Solaris ŁÓDŹ" class="w-full object-cover">
                <p class="p-3 bg-slate-50 text-xs text-center text-[#86868b]">Logo TRAM-EM Warsaw 2026</b></p>
            </div>

<p>Rywalizacja rozegra się bezpośrednio na ulicy Marszałkowskiej. Oficjalne otwarcie imprezy zaplanowano na godzinę 10:00, pierwsza część zawodów ruszy o 11:00, a po przerwie (13:00–14:00) motorniczowie wrócą na trasę w godzinach 14:00–16:30. Wydarzenie zakończy się o 17:00 dekoracją zwycięzców i symbolicznym przekazaniem organizacji kolejnej edycji Luksemburgowi.</p>

<div class="my-8 rounded-2xl overflow-hidden shadow-md border border-slate-200">
                <img src="content/akt/dtp-zawody-01.jpg" alt="Autobus Solaris ŁÓDŹ" class="w-full object-cover">
                <p class="p-3 bg-slate-50 text-xs text-center text-[#86868b]">Zdjęcie poglądowe zawodów DTP</b></p>
            </div>

<h3 class="font-heading text-xl font-bold text-[#1d1d1f] mt-6 mb-3">Piknik rodzinny i strefy operatorów WTP</h3>
<p>Przez cały dzień (w godz. 10:00–17:00) Plac Centralny wypełni się stoiskami przygotowanymi przez m.st. Warszawę, Zarząd Transportu Miejskiego (ZTM) oraz stołecznych operatorów: Tramwaje Warszawskie, Metro Warszawskie, Miejskie Zakłady Autobusowe (MZA) oraz Szybką Kolej Miejską (SKM).</p>
<p>Na odwiedzających – zarówno najmłodszych, jak i starszych pasażerów – czeka bogaty program atrakcji:</p>
           <ul class="list-disc pl-6 space-y-2">
                <li><b>Dla dzieci i rodzin:</b> pluszowe miasteczko drogowe, gigantyczne dmuchańce (Giga Farma i Mega Tor Przeszkód), mobilny plac zabaw w autobusie, klocki LEGO, XXL i strefy kreatywne (malowanie buziek, tatuaże airbrush). Nie zabraknie też kolejki szynowej, minidrezyny ręcznej czy spotkań z robotem humanoidalnym stworzonym specjalnie na tę okazję.</li>
                <li><b>Dla pasjonatów techniki i historii:</b> wystawy taboru historycznego i współczesnego. Wśród zabytkowych autobusów pojawią się legendy dróg: Chausson, „ogórki” (Jelcz 043 i Škoda 706), San H100A oraz kultowy Ikarus 260 i 280, a także tramwaje na ul. Marszałkowskiej. Zobaczyć będzie można również nowoczesne pojazdy techniczne, w tym elektryczny wózek „Minionek” czy najnowszy wóz Nadzoru Ruchu ZTM.</li>
                <li><b>Strefy relaksu i edukacji:</b> strefy chilloutu z leżakami i pufami, warsztaty pierwszej pomocy, gry i zabawy z nosorożcem Rogatkiem (w ramach kampanii „Kolejowe ABC”) oraz punkty rekrutacyjne miejskich przewoźników.</li>
            </ul>
         <p class="mt-4">Dni Transportu Publicznego to doskonała okazja, by zajrzeć „od kuchni” do świata warszawskiej komunikacji, kibicować najzdolniejszym motorniczym z całego globu i spędzić aktywnie sobotę w centrum miasta. Wstęp na wszystkie wydarzenia jest bezpłatny. Szczegółowy harmonogram można znaleźć na oficjalnej stronie <a href="https://www.wtp.waw.pl/dtp2026/" class="text-blue-600 font-semibold hover:underline">Warszawskiego Transportu Publicznego</a></p>
            `
    },
         {
        id: 9,
        tytul: "Koniec z wykluczeniem komunikacyjnym? Rząd chce minimum 4 połączeń dziennie na wsi",
        kategoria: "Aktualności",
        data: "12 września 2026",
        czasCzytania: "15 min czytania",
        autor: "O5K4R Solutions",
        autorAvatar: "content/akt/O5K4R.png",
        baner: "content/akt/Gemini_Generated_Image_2c1v4l2c1v4l2c1v.jpg",
        trescPelna: `
            <p>Mieszkasz na wsi i dotarcie do lekarza, urzędu czy większego sklepu graniczy z cudem? Rząd chce ukrócić problem braku autobusów. Nowa ustawa o publicznym transporcie zbiorowym zakłada wprowadzenie ogólnopolskich standardów – każda gmina będzie musiała zapewnić mieszkańcom minimalną liczbę kursów dziennie.</p>
 <p>Problem tzw. wykluczenia komunikacyjnego dotyka w Polsce milionów osób. Setki wsi i małych miejscowości zostały całkowicie odcięte od świata po tym, jak przez lata likwidowano połączenia PKS-owe i prywatne linie autobusowe. Osoby starsze, niemające własnego samochodu lub prawa jazdy, stały się więźniami własnych domów, nie mogąc dojechać do lekarza specjalisty, załatwić sprawy w urzędzie czy zrobić większych zakupów.</p>
<p>Sytuacja ta ma się jednak diametralnie zmienić za sprawą kompleksowej reformy transportu publicznego.</p>

<h3 class="font-heading text-xl font-bold text-[#1d1d1f] mt-6 mb-3">Czym jest standard „4+2”? Ile połączeń zagwarantuje ustawa?</h3>
<p>Kluczowym elementem nowych przepisów jest wprowadzenie po raz pierwszy w Polsce minimalnego standardu dostępności komunikacyjnej. Zgodnie z założeniami projektu, samorządy będą miały obowiązek zagwarantować odpowiednią częstotliwość kursów:</p>
<ul class="list-disc pl-6 space-y-2">
                <li><b>Minimum 4 pary połączeń dziennie</b> w dni robocze (od poniedziałku do piątku),</li>
                <li><b>Minimum 2 pary połączeń dziennie</b> w dni wolne od pracy (weekendy i święta).</li>
            </ul>

<div class="my-8 rounded-2xl overflow-hidden shadow-md border border-slate-200">
                <img src="content/akt/Gemini_Generated_Image_ku92elku92elku92.jpg" alt="Nowoczesny autobus na zamówienie. Wygenerowano przez Ai" class="w-full object-cover">
                <p class="p-3 bg-slate-50 text-xs text-center text-[#86868b]">Nowoczesny autobus na zamówienie. <b>Wygenerowano przez Ai</b></b></p>
            </div>
<p>Taki standard ma obowiązywać na trasach łączących siedziby gmin z siedzibami powiatów oraz stolicami województw. Oznacza to, że gmina nie będzie mogła już bezkarnie zignorować potrzeb mieszkańców mniejszych miejscowości – uruchomienie regularnych kursów stanie się jej prawnym obowiązkiem.</p>

<h3 class="font-heading text-xl font-bold text-[#1d1d1f] mt-6 mb-3">Transport na żądanie i „busy na telefon”</h3>
<p>Twórcy ustawy zdają sobie sprawę, że w najmniejszych przysiółkach czy wsiach puszczanie dużego, tradycyjnego autobusu raz za razem jest ekonomicznie nieuzasadnione i generowałoby ogromne straty. Dlatego przepisy wprowadzają rozwiązanie znane z zachodniej Europy – <b>transport na żądanie.</b></p>
<p>W praktyce ma to wyglądać tak, że na terenach wiejskich, gdzie zapotrzebowanie jest mniejsze, uruchomione zostaną mniejsze pojazdy (np. busy mieszczące do 9 osób). Mieszkaniec będzie mógł zamówić taki transport telefonicznie lub za pomocą aplikacji – zgłaszasz potrzebę przejazdu, a bus przyjeżdża o wyznaczonej godzinie, aby dowieźć Cię do węzła przesiadkowego lub ośrodka zdrowia.</p>

<h3 class="font-heading text-xl font-bold text-[#1d1d1f] mt-6 mb-3">Jeden bilet i cyfrowe rozkłady jazdy</h3>
<p>Reforma ma uporządkować także chaos informacyjny. Wszystkie rozkłady jazdy mają być udostępniane w formie cyfrowej i łatwo dostępne w Internecie. Osoby starsze będą mogły liczyć na pomoc młodszych członków rodziny w wyszukiwaniu połączeń.</p>
<p>Co więcej, ustawa przewiduje integrację transportu autobusowego z kolejowym. Docelowo pasażer ma mieć możliwość zakupu jednego wspólnego biletu na całą podróż, nawet jeśli po drodze czeka go przesiadka z lokalnego busa na pociąg regionalny.</p>

<h3 class="font-heading text-xl font-bold text-[#1d1d1f] mt-6 mb-3">Kto za to odpowiada i kiedy zmiany wejdą w życie?</h3>
<p>Za koordynację siatki połączeń w regionie odpowiadać będą marszałkowie województw, którzy staną się głównymi integratorami transportu. Przejmą oni nadzór nad spójnością sieci i lepszym rozdysponowaniem środków z Funduszu rozwoju przewozów autobusowych.</p>
<p>Projekt rządowy spotkał się jednak z dyskusją i uwagami ze strony samorządów oraz przewoźników, którzy zwracają uwagę na wyzwania finansowe i logistyczne związane m.in. z cyfryzacją rozkładów czy wymogami taborowymi. Niezależnie od prowadzonych debat, kierunek zmian ma na celu jedno: przywrócenie mobilności tym, którzy do tej pory byli skazani wyłącznie na własne nogi lub pomoc sąsiadów.</p>
 `
    }
];
