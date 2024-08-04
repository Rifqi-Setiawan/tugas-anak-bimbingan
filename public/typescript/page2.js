// Nama user start
var uname = localStorage.getItem("uname");
if (uname !== null) {
    var fullName = document.getElementById("userName");
    if (fullName) {
        fullName.textContent = uname;
    }
}
// Nama user end
// genre button start
var genre = document.getElementById("genre");
var listGenre = document.getElementById("listGenre");
genre === null || genre === void 0 ? void 0 : genre.addEventListener("click", function () {
    listGenre === null || listGenre === void 0 ? void 0 : listGenre.classList.toggle("hidden");
    listGenre === null || listGenre === void 0 ? void 0 : listGenre.classList.toggle("grid");
});
var dataBukuTop = [
    {
        judul: "You do you",
        image: "https://cdn.gramedia.com/uploads/picture_meta/2023/6/16/y3sd5cbky6xx4pdkipmeic.jpeg",
        penulis: "Fellexandro Ruby",
        rating: "4.4",
    },
    {
        judul: "Atomic Habits",
        image: "https://cdn.gramedia.com/uploads/items/9786020633176_.Atomic_Habit.jpg",
        penulis: "James Clear",
        rating: "4.5",
    },
    {
        judul: "I want to die...",
        image: "https://cdn.gramedia.com/uploads/items/9786237351030.jpg",
        penulis: "Baek Se Hee",
        rating: "4.2",
    },
    {
        judul: "Laut bercerita",
        image: "https://s3-ap-southeast-1.amazonaws.com/ebook-previews/40678/143505/1.jpg",
        penulis: "Leila S. Chudori",
        rating: "4.1",
    },
    {
        judul: "Almond",
        image: "https://cdn.gramedia.com/uploads/items/9786020519807_FIX_Binder_Co.jpg",
        penulis: "Sohn Won-pyung",
        rating: "4.5",
    },
    {
        judul: "Filosofi Teras",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1548033656i/42861019.jpg",
        penulis: "Hery Manampiring",
        rating: "4.3",
    },
    {
        judul: "Kill a Mocking..",
        image: "https://ebooks.gramedia.com/ebook-covers/25313/image_highres/HCO_TKAM2018MTH11.jpeg",
        penulis: "Harper Lee",
        rating: "4.4",
    },
    {
        judul: "Moby-Dick",
        image: "https://cdn.gramedia.com/uploads/picture_meta/2023/5/17/84g7aqupmucegtgegdyz5q.jpg",
        penulis: "Herman Melville",
        rating: "4.2"
    },
    {
        judul: "1984",
        image: "https://cdn.gramedia.com/uploads/items/1984.jpg",
        penulis: "Orwell",
        rating: "4.3"
    }
];
var urutan = 0;
bukuTop(".judul-top", ".gambar-top", ".penulis-top", ".rating-top", dataBukuTop, urutan);
// arrow right
var kanan = document.getElementById("arrowRight");
kanan.addEventListener("click", function () {
    if (urutan < dataBukuTop.length - 4) {
        urutan += 3;
        bukuTop(".judul-top", ".gambar-top", ".penulis-top", ".rating-top", dataBukuTop, urutan);
    }
});
// arrow left
var kiri = document.getElementById("arrowLeft");
kiri.addEventListener("click", function () {
    if (urutan > 0) {
        urutan -= 3;
        bukuTop(".judul-top", ".gambar-top", ".penulis-top", ".rating-top", dataBukuTop, urutan);
    }
});
function bukuTop(judulTop, imageTop, penulisTop, ratingTop, dataBukuTop, count) {
    var judul = document.querySelectorAll(judulTop);
    var image = document.querySelectorAll(imageTop);
    var penulis = document.querySelectorAll(penulisTop);
    var rating = document.querySelectorAll(ratingTop);
    if (judul && image && penulis && rating) {
        for (var i = 0; i < judul.length; i++) {
            var index = count + i;
            if (dataBukuTop[index]) {
                judul[i].textContent = dataBukuTop[index].judul;
                image[i].setAttribute("src", dataBukuTop[index].image);
                penulis[i].textContent = dataBukuTop[index].penulis;
                rating[i].textContent = dataBukuTop[index].rating;
            }
        }
    }
}
var dataBukuBot = [
    {
        judul: "Bumi",
        reads: "245k reads",
        rating: "4.7",
        genre: "fiksi",
        image: "https://cdn.gramedia.com/uploads/items/img20220830_10560995.jpg"
    },
    {
        judul: "Physcholo..",
        reads: "123k reads",
        rating: "4.2",
        genre: "pyschology",
        image: "https://cdn.gramedia.com/uploads/items/psychology_of_money.jpg"
    },
    {
        judul: "Dilan 1990",
        reads: "321k reads",
        rating: "4.6",
        genre: "fiksi",
        image: "https://ebooks.gramedia.com/ebook-covers/31754/big_covers/ID_MIZ2016MTH03DDADT_B.jpg"
    },
    {
        judul: "Insecurity",
        reads: "80k reads",
        rating: "4.1",
        genre: "pyschology",
        image: "https://cdn.gramedia.com/uploads/items/Cover_Depan_Insecurity_Is_My_Middle_Name.jpg"
    },
    {
        judul: "Bulan",
        reads: "238k reads",
        rating: "4.7",
        genre: "fiksi",
        image: "https://inc.mizanstore.com/aassets/img/com_cart/produk/rbak-017--.JPG"
    },
    {
        judul: "Matahari",
        reads: "327k reads",
        rating: "4.5",
        genre: "fiksi",
        image: "https://cdn.gramedia.com/uploads/items/ID_GPU2016MTH07MATA_C.jpg"
    },
    {
        judul: "Bintang",
        reads: "205k reads",
        rating: "4.8",
        genre: "fiksi",
        image: "https://cdn.gramedia.com/uploads/picture_meta/2023/4/10/ccmq4kges6gstnsrrtxabw.jpg"
    },
    {
        judul: "Ceros dan...",
        reads: "245k reads",
        rating: "4.7",
        genre: "fiksi",
        image: "https://cdn.gramedia.com/uploads/images/1/42716/image_highres/ID_CB2018MTH05CB.jpg"
    },
    {
        judul: "Komet",
        reads: "198k reads",
        rating: "4.6",
        genre: "fiksi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbMYaQ6CAIGoosbgR_DijyDLOg6PK5JXZVKw&s"
    },
    {
        judul: "Birdbox",
        reads: "135k reads",
        rating: "4.3",
        genre: "horror",
        image: "https://ebooks.gramedia.com/ebook-covers/43574/image_highres/HCO_BIBOX2018MTH08.jpeg"
    },
    {
        judul: "Kambing..",
        reads: "245k reads",
        rating: "4.7",
        genre: "comedy",
        image: "https://cdn.gramedia.com/uploads/items/9789797808952C_9789797808952.jpg"
    },
    {
        judul: "Pulang",
        reads: "545k reads",
        rating: "4.2",
        genre: "fiksi",
        image: "https://cdn.gramedia.com/uploads/items/9786020822129_Pulang-Cover-Baru.jpg"
    },
    {
        judul: "Dracula",
        reads: "84k reads",
        rating: "4.8",
        genre: "horror",
        image: "https://cdn.gramedia.com/uploads/items/ID_HCO2015MTH04TEXO_B.jpg"
    },
    {
        judul: "Koala..",
        reads: "545k reads",
        rating: "4.2",
        genre: "comedy",
        image: "https://cdn.gramedia.com/uploads/items/9789797808990_Koala-Kumal-Edisi-Revisi.jpg"
    },
    {
        judul: "Pergi",
        reads: "415k reads",
        rating: "4.5",
        genre: "fiksi",
        image: "https://cdn.gramedia.com/uploads/items/pergi_tere_liye.jpeg"
    },
    {
        judul: "Marmut mer..",
        reads: "245k reads",
        rating: "4.7",
        genre: "comedy",
        image: "https://cdn.gramedia.com/uploads/items/9786022202325C_9786022202325.jpg"
    },
    {
        judul: "Man's search..",
        reads: "245k reads",
        rating: "4.7",
        genre: "physchology",
        image: "https://cdn.gramedia.com/uploads/items/9786023854165_MANS-SEARCH-F.jpg"
    },
    {
        judul: "DI balik..",
        reads: "195k reads",
        rating: "4.7",
        genre: "horror",
        image: "https://cdn.gramedia.com/uploads/items/48e20c0c-0af0-4609-bf8d-0752c395ab23.jpg"
    },
    {
        judul: "Pintu Terlarang",
        reads: "165k reads",
        rating: "4.7",
        genre: "horror",
        image: "https://ebooks.gramedia.com/ebook-covers/42396/image_highres/ID_PT2018MTH05PT.jpg"
    },
    {
        judul: "bahagia itu..",
        reads: "45k reads",
        rating: "4.2",
        genre: "physchology",
        image: "https://cdn.gramedia.com/uploads/items/Bahagia_Itu_Sederhana_Melatih_Diri_Memaksimalkan_Setiap.jpg"
    },
    {
        judul: "Jangan baca..",
        reads: "135k reads",
        rating: "4.7",
        genre: "horror",
        image: "https://cdn.gramedia.com/uploads/items/9786021142851_kalo-sensi-jangan-baca-buku-ini.jpg"
    },
    {
        judul: "Sepotong Hati..",
        reads: "24k reads",
        rating: "4.7",
        genre: "physchology",
        image: "https://cdn.gramedia.com/uploads/items/9786239554545.jpg"
    },
    {
        judul: "Manusia setengah..",
        reads: "75k reads",
        rating: "4.2",
        genre: "comedy",
        image: "https://cdn.gramedia.com/uploads/items/9789797808983_Manusia-Seten.jpg"
    },
    {
        judul: "Setiap luka..",
        reads: "75k reads",
        rating: "4.7",
        genre: "physchology",
        image: "https://cdn.gramedia.com/uploads/picture_meta/2023/1/14/saqbnecfkwcyytf4jf8hei.jpg"
    },
    {
        judul: "Sebuah seni..",
        reads: "245k reads",
        rating: "4.7",
        genre: "physchology",
        image: "https://cdn.gramedia.com/uploads/items/sebuah_seni_untuk_bersikap_bodo_amat_hard_cover_font_revisi-1__w142_hauto.jpg"
    },
    {
        judul: "Si juki",
        reads: "35k reads",
        rating: "4.3",
        genre: "comedy",
        image: "https://cdn.gramedia.com/uploads/items/9786022202431_9786022202431.jpg"
    },
    {
        judul: "Danur",
        reads: "245k reads",
        rating: "4.7",
        genre: "horror",
        image: "https://bukukita.com/babacms/displaybuku/83146_f.jpg"
    }
];
var urutInner = 0;
bookBot(urutInner, 9, dataBukuBot);
function bookBot(urutBot, panjang, sumberData) {
    var generalDiv = document.querySelectorAll('.generalDivBooksBot');
    var imageBot = document.querySelectorAll('.gambar-bot');
    var judulBot = document.querySelectorAll('.judul-bot');
    var readsBot = document.querySelectorAll('.reads-bot');
    var ratingBot = document.querySelectorAll('.rating-bot');
    if (imageBot && judulBot && readsBot) {
        for (var i = 0; i < panjang; i++) {
            var indeks = urutBot + i;
            judulBot[i].textContent = sumberData[indeks].judul;
            readsBot[i].textContent = sumberData[indeks].reads;
            imageBot[i].src = sumberData[indeks].image;
            ratingBot[i].textContent = sumberData[indeks].rating;
        }
        ;
    }
    ;
    if (panjang < 9) {
        for (var k = panjang; k < 9; k++) {
            generalDiv[k].classList.add('hidden');
        }
        ;
    }
    else if (panjang >= 9) {
        for (var z = 0; z < 9; z++) {
            generalDiv[z].classList.remove('hidden');
        }
        ;
    }
}
var cek = true;
function arrow(option) {
    if (cek === true) {
        if (option === 'kanan' && urutInner < 10) {
            urutInner += 9;
        }
        else if (option === 'kiri' && urutInner > 0) {
            urutInner -= 9;
        }
        ;
        bookBot(urutInner, 9, dataBukuBot);
    }
}
function getGenre(type) {
    var j = 0;
    var i = 0;
    var listGenreBuku = [];
    if (type === 'all') {
        urutInner = 0;
        cek = true;
        bookBot(0, 9, dataBukuBot);
    }
    else {
        cek = false;
        while (i < dataBukuBot.length) {
            if (type === dataBukuBot[i].genre) {
                listGenreBuku[j] = dataBukuBot[i];
                j += 1;
            }
            i += 1;
        }
        bookBot(0, listGenreBuku.length, listGenreBuku);
    }
    listGenre === null || listGenre === void 0 ? void 0 : listGenre.classList.toggle("hidden");
    listGenre === null || listGenre === void 0 ? void 0 : listGenre.classList.toggle("grid");
}
