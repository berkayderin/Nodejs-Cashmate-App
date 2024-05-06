const categories = {
	yiyecek: [
		'restoran',
		'yemek',
		'pizza',
		'hamburger',
		'kafeterya',
		'lokanta',
		'börekçi',
		'pideci',
		'simitçi',
		'balıkçı',
		'dönerci',
		'kebapçı',
		'meyhane',
		'pastane'
	],
	ulasim: [
		'uber',
		'taksi',
		'otobüs',
		'metro',
		'tren',
		'minibüs',
		'dolmuş',
		'feribot',
		'metrobüs',
		'teleferik',
		'otopark ücreti',
		'trafik cezası',
		'akaryakıt',
		'LPG',
		'benzin',
		'dizel'
	],
	eglence: [
		'sinema',
		'tiyatro',
		'konser',
		'netflix',
		'bluTV',
		'festival',
		'fuari',
		'karnaval',
		'gece kulübü',
		'bar',
		'oyun salonu',
		'bahis',
		'iddaa',
		'spor müsabakaları'
	],
	faturalar: [
		'elektrik',
		'su',
		'internet',
		'doğalgaz',
		'kira',
		'telefon faturası',
		'aidat',
		'TV aboneliği',
		'dijital platform abonelikleri',
		'çevre temizlik vergisi',
		'emlak vergisi'
	],
	alisveris: [
		'amazon',
		'alışveriş',
		'AVM',
		'giyim',
		'market',
		'süpermarket',
		'bakkal',
		'alışveriş merkezi',
		'organik pazar',
		'çiftçi pazarı',
		'kitapçı',
		'kırtasiye',
		'oyuncakçı'
	],
	saglik: [
		'eczane',
		'doktor',
		'hastane',
		'sağlık kontrolü',
		'ilaç',
		'optik',
		'diş hekimi',
		'psikolog',
		'fizyoterapist',
		'aşı',
		'tahlil ücreti',
		'sağlık sigortası'
	],
	egitim: [
		'okul ücreti',
		'ders kitapları',
		'eğitim materyalleri',
		'kurs',
		'seminar',
		'workshop',
		'özel ders',
		'yabancı dil kursu',
		'sürücü kursu',
		'sanat kursu',
		'müzik kursu'
	],
	evGerecleri: [
		'mobilya',
		'ev aletleri',
		'bahçe malzemeleri',
		'yapı market',
		'dekorasyon',
		'aydınlatma',
		'bahçe mobilyaları',
		'elektrikli ev aletleri',
		'hırdavat'
	],
	kisiselBakim: [
		'kuaför',
		'güzellik salonu',
		'spa',
		'manikür',
		'pedikür',
		'kozmetik',
		'parfümeri',
		'dermatoloji',
		'cilt bakım ürünleri',
		'saç bakım ürünleri',
		'makyaj malzemeleri'
	],
	spor: [
		'spor salonu',
		'fitness',
		'yoga',
		'pilates',
		'spor malzemeleri',
		'koşu bandı',
		'bisiklet',
		'dağcılık',
		'kamp malzemeleri',
		'yüzme',
		'tenis',
		'futbol',
		'basketbol'
	],
	tatil: [
		'otel',
		'tatil köyü',
		'uçak bileti',
		'seyahat acentası',
		'tur paketi',
		'kamping',
		'yurt içi turlar',
		'yurt dışı turlar',
		'müze ve ören yeri giriş ücretleri',
		'seyahat sigortası'
	],
	giyim: [
		'kıyafet',
		'ayakkabı',
		'çanta',
		'aksesuar',
		'giyim mağazası',
		'terzi',
		'moda evi',
		'çocuk giyim',
		'iç giyim',
		'spor giyim',
		'ayakkabıcı',
		'saat'
	],
	teknoloji: [
		'elektronik',
		'bilgisayar',
		'telefon',
		'tablet',
		'teknoloji market',
		'yazılım',
		'uygulama satın alımları',
		'video oyunları',
		'konsollar',
		'akıllı saatler',
		'akıllı ev aletleri'
	],
	hayvanBakimi: [
		'veteriner',
		'petshop',
		'kedi maması',
		'köpek maması',
		'hayvan bakım ürünleri',
		'akvaryum',
		'kuş yemi',
		'pet kuaförü',
		'hayvan sağlık ürünleri',
		'hayvan oyuncakları'
	]
}

const categorizeTransaction = (description) => {
	const descLower = description.toLowerCase()
	for (const category in categories) {
		const keywords = categories[category]
		for (let keyword of keywords) {
			if (descLower.includes(keyword)) {
				return category
			}
		}
	}
	return 'other'
}

module.exports = categorizeTransaction
