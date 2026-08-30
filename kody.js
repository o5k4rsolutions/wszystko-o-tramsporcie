const _db_payload = {
    "HY-WAW-10010": [
        {
            name: "Ruszanie oraz rozruch Hyundai Rotem",
            size: "942 KB",
            url: "https://wszystko-o-tramsporcie.vercel.app/produkty/elek/ruszaniehultaj.mp3"
        },
        {
            name: "Hamowanie Hyundai Rotem",
            size: "211 KB",
            url: "https://wszystko-o-tramsporcie.vercel.app/produkty/elek/hamowaniehultaj.mp3"
        }
    ],
    "TRAM-9876-BETA": [
        {
            name: "Specjalne Nagrania Kabinowe Konstal 105Na",
            size: "18.5 MB",
            url: "https://example.com/files/konstal.mp3"
        },
        {
            name: "Dźwięki Nowoczesnych Tramwajów Swing & Jazzy",
            size: "12.1 MB",
            url: "https://example.com/files/modern.mp3"
        }
    ],
    "TRAM-1234-DEMO": [
        {
            name: "Przykładowy Dźwięk Dzwonka Tramwajowego",
            size: "2.4 MB",
            url: "https://example.com/files/dzwonek.mp3"
        }
    ]
};

function getSecureFiles(inputCode) {
    const files = _db_payload[inputCode.trim()];
    if (!files) return null;
    return files;
}
