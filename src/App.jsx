// import { useScroll } from "framer-motion";
import Accordion from "./components/Accordion";
import AnimatedList from "./components/AnimatedList";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Section from "./components/Section";
import SlideParagraph from "./components/SlideParagraph";
// import { motion } from "framer-motion";
// import { useRef } from "react";

function App() {
  return (
    <div className="custom-scrollbar overflow-x-hidden h-screen w-screen overflow-y-auto bg-brick">
      <Hero />
      <Section title="UUD NRI 1945">
        <SlideParagraph>
          Konstitusi dan hukum dasar tertulis yang berlaku di Indonesia. UUD
          1945 merupakan sumber hukum tertinggi di Indonesia dan menjadi
          perwujudan dari ideologi negara, yaitu Pancasila.
        </SlideParagraph>
        {/* <aside className="bg-blue-500">hello wolrd</aside> */}
      </Section>
      <Section title="Amandemen" align="right">
        <aside></aside>
        <div>
          <SlideParagraph from="right">
            Amandemen UUD 1945 adalah proses perubahan atau perbaikan terhadap
            Undang-Undang Dasar 1945 (UUD 1945) sebagai dasar negara Indonesia.
            Amandemen dilakukan untuk menyempurnakan UUD 1945, bukan
            menggantinya. Amandemen UUD 1945 telah dilakukan sebanyak empat kali
            pada tahun 1999 - 2002: Amandemen I pada 19 Oktober 1999, Amandemen
            II pada 18 Agustus 2000, Amandemen III pada 10 November 2001,
            Amandemen IV pada 10 Agustus 2002.
          </SlideParagraph>
          <Accordion
            content={{
              "Amandemen 1": ["Pengurangan masa jabatan presiden"],
              "Amandemen 2": [
                "Hak otonomi daerah",
                "Meningkatkan pemerintahan daerah, DPR, dan kewenangannya",
                "Hak asasi manusia",
                "Lambang negara",
              ],
              "Amandemen 3": [
                "Bentuk dan kedaulatan negara",
                "Kewenangan MPR",
                "Kepresidenan",
                "Keuangan negara",
                "Kekuasaan kehakiman",
              ],
              "Amandemen 4": [
                "DPR sebagai bagian dari MPR",
                "Mata uang",
                "Bank sentral",
                "Pendidikan kebudayaan",
                "Perekonomian nasional",
                "Kesejahteraan sosial",
              ],
            }}
            className="mt-8"
          />
        </div>
      </Section>
      <Section title="Sistematika">
        <Accordion
          content={{
            Sebelum:
              "Bagian Pembukaan UUD 1945 terdiri dari 4 Alinea.\nBagian Batang UUD 1945 terdiri dari 16 Bab, 37 Pasal, 65 Ayat, 4 Pasal Aturan Peralihan, serta 2 ayat Aturan Tambahan Penjelasan",
            Sesudah:
              "Bagian Pembukaan UUD 1945 tetap terdiri dari 4 Alinea.\nBagian Batang UUD 1945 menjadi 16 Bab, 37 Pasal, 170 Ayat, 3 Pasal Aturan Peralihan, serta 2 pasal Aturan Tambahan",
          }}
        />
      </Section>
      <Section title="Sistem Tata Negara" align="right">
        <aside></aside>
        <div className="lg:pr-8 grid max-lg:grid-rows-2 lg:grid-cols-2 gap-4">
          <Card img={{ src: "img/sistem-sebelum.png" }} title="Sebelum">
            <p className="text-justify">
              Dewan Pertimbangan Agung (DPA) dibentuk berdasarkan undang-undang
              yang ditetapkan, dengan tugas dan fungsi memberikan jawab atas
              pertanyaan Presiden dan berhak memajukan usul kepada pemerintah.
            </p>
          </Card>
          <Card img={{ src: "img/sistem-sesudah.png" }} title="Sesudah">
            <ul className="text-justify list-disc pl-4">
              <li>Fungsi Legislatif dilaksanakan oleh MPR, DPR dan DPD.</li>
              <li>
                Fungsi Eksekutif dilaksanakan oleh Presiden dan Wakil Presiden.
              </li>
              <li>Fungsi Yudikatif dilaksanakan oleh MA, MK dan KY.</li>
              <li>
                BPK untuk memeriksa tanggung jawab tentang keuangan negara.
              </li>
            </ul>
          </Card>
        </div>
      </Section>
      <Section title="Faktor Amandemen">
        <div>
          <p className="font-semibold">
            Beberapa faktor utama dilakukannya amandemen atas UUD 1945 adalah:
          </p>
          <AnimatedList
            items={[
              "Kurangnya sistem cek dan keseimbangan pada institusi-institusi pemerintahan.",
              "Dominasi kekuasaan eksekutif yang terlalu kuat, dengan hak prerogatif dan kekuasaan legislatif yang terlalu besar di tangan Presiden.",
              "Pasal 7 UUD 1945 sebelum amandemen terlalu fleksibel.",
              "Terbatasnya pengaturan jaminan hak asasi manusia (HAM).",
            ]}
          />
          <SlideParagraph>
            Oleh karena itu, tujuan dari amandemen UUD 1945 yang dilakukan
            sebanyak 4 kali ini adalah untuk menyempurnakan aturan-aturan dasar
            negara seperti tatanan negara, kedaulatan rakyat, hak asasi manusia,
            pembagian kekuasaan, eksistensi negara demokrasi dan negara hukum,
            serta hal-hal lain yang sesuai dengan perkembangan aspirasi dan
            kebutuhan bangsa.
          </SlideParagraph>
        </div>
        <aside></aside>
      </Section>
      <Footer />
    </div>
  );
}

export default App;
