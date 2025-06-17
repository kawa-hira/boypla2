const students = [
  { name: "ビエンシーユー", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/17523DCC77784D61A8E1D53A33891B4B/GZTQ0ITRzEkNBBTM0YjQGFENxkDOCRkM5MkMEBjM2YD.jpg" },
  { name: "ツァイジンシン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/6362CCCE8CE342029782237529950EBE/3YTQGhzQEVERBlDO0UTMEJkM4cDNFNUMBBzN2E0N5kD.jpg" },
  { name: "チェン・ボーウェン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/6A8E81044216475D9B55DE84A075F3FC/3YUOFVkQBJzM5YjR0UkQxgTM4kDR1AzQ4kTNyUkR5YE.jpg" },
  { name: "チェン・チャオユー", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/8F46E13784014F2098B3F07B2B532B96/FBTNChDN3QDRERER0MjR4IURwEzQwkTO1YDO1QEOCBD.jpg" },
  { name: "チェン・ジンシン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/E7F4E1D7AD0B4283B03213BE0DA4A860/xkjRwMDR4UjNyUDM0UkREJ0QxYTQChDMFZ0QEZDO0QE.jpg" },
  { name: "チェン・カイウェン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/5D0BBD47382F4122B6CC0661E2C4E873/3czMwgTR0kjMwAzQ0YzNyEURzUENwEEO3IzQ3YDN2QD.jpg" },
  { name: "チェンリーチー", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/356A1B1F500548A5BAB92D95382D6534/2cDRDZEO4AzQ5cTM0EkMzgjQChTQGZUR3gTMxgjRwgD.jpg" },
  { name: "チェン・ズーシュオ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/A73BF094AD394CDEB2E098C98042C12D/ERjR4QEMDNTM4UDO0Q0NGFkNzIEOwUjR0MzN2gTQ4QD.jpg" },
  { name: "クリセンヤン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/26433E4BE21B417E9D10AAA9A1A9FB75/3MjM2EUO4I0Q0IzM0EEOxEEO2cjMwIkMyI0Q2MzMGND.jpg" },
  { name: "ダン・ホン・ハイ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/9CE5E5F08D3F4182A2BC2764D0FBD3EE/BFDNFlTQ2IUM4EUO0E0QEJkQ4EENykjMyMzNDhjM2UE.jpg" },
  { name: "ドン・ジンコン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/FDD74A9D87FD4D368303B2D99EB74E86/CZzM4I0MFRTMERkN0QjM3IERxEkQxIEN3MDOxgTQwgD.jpg" },
  { name: "ドンズーチー", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/2144E9E93F854260BE98FAEB2F38DE54/zcTN2IzQBdzMykjM0ATQ0EUOBVERxQERCdzQxEkMFhD.jpg" },
  { name: "ファンジョーイー", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/DCDCE7EBD7164E4AB1992F0265CF10E3/1YTNwMDOwMTOEZTN0ETO1EUR0YER4MDNBVUNzQjQCNE.jpg" },
  { name: "グオ・ジェン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/ECC0EB6EDD02471EB31EDA97BFD2F607/1MUMzQUMBRERCFzN0kDMGlDMGlzNDZUQEJkMFZ0Q5YD.jpg" },
  { name: "ハン・ルイゾー", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/2E698FDF2E7149899B8272FBCB07AC47/1EzQ5YUNyUTM1QzN0QUO3IEN3ETNwkDRFN0NyYUQycD.jpg" },
  { name: "ホージュンジン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/BC28E4D2DB3548ED8964F3FA90DFC926/wYkM0MUNwIDR4UkN0U0NzIUQFJTR2QEN5EDRFZUN2ED.jpg" },
  { name: "ホー・シンロン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/182101E733AE4BBF82BD2965E7F8F110/GhDNFhDN0MzM5EDO0U0MzkzQ3YTM5QzM0IkQGVEMElD.jpg" },
  { name: "ホー・ジョンシン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/E8F59961107E49209F7B3CC29D64AF70/4EDO1MjRDRDNBVzM0UkNGJEMEZUQFVTNBdTMBJUN4MD.jpg" },
  { name: "ホン・ジーハン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/2CADAC7DD6DD4BC3916579B3503411BF/4QERFZjNwMTN2MTM0YEOBFENxgDRCVDNDFUMFZEN5IE.jpg" },
  { name: "ホンズーハオ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/B231BE571F4E4BDB93E5ACF7BC2F27D3/BRDOwQEM4gDRyUTM0gTOBhTR4IkQ0Y0M4YTNzcjQDFE.jpg" },
  { name: "フー・ハンウェン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/1AEEAA2DFEF7404CB83AABB659282BDC/5AjQ4MTQ4EjQ0kjN0UUN4IkNCRjNCNDRDFjQ1kDO4AD.jpg" },
  { name: "ホアンシンユー", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/0E92AE65A9604C86B229ACC3CE6881DD/0IzNFhTR4EzNBFER0gjNChTMFFTQGhjR2ETMCVUQ0AD.jpg" },
  { name: "ジャ・ハンユー", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/6497EEB23333468B8A0D970CE18EAE38/yMkN3MDR4YjNCBjN0cjNxgDOyMzNCJjRDdTNzADR4EE.jpg" },
  { name: "ジアンファン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/A62E07D3F0BC4B2F9ABBC490CBF7EB5B/4UjQ1gjN3QzM4QzQ0ETNyIUOGZjN2EkRClzQBZkM2IE.jpg" },
  { name: "コ・ミン・チエ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/B6DC1D04E1C1487E87EC1E637D662588/1UDN4cjRxMkM3QzN0MTRygDRCJkMERkRwQDN3QDOxUD.jpg" },
  { name: "クリスティアン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/AF2F9792DC914CF1BF72FC4D312C4F2B/wMTO2Y0MBRjMER0Q0AjREFkQCNjNzgzMBdDN4M0NyIE.jpg" },
  { name: "リーシャオディー", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/9CB071C7C3A2419FB92EEB462098732B/FlTN5IkQ4EDRFR0N0gzNEFkM5MDNygDMBVUO3YTNCNE.jpg" },
  { name: "リー・ジョンエン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/9F3752D48DF8419791736680346C0477/zUjN1UUNEZ0M2gTQ0ATMzkDMGdjQEJTO0M0MBVkNBlD.jpg" },
  { name: "リー・ツーハオ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/6580B87E50BD4329923EC32A2DED9473/wU0QBJkNzgjQFRDN0YTR4kzNFFTMENERDdzQ2M0MCJE.jpg" },
  { name: "イムジャク", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/3FB09B1682A8406B80A977FE785D02F5/xEUM0MzQDVENCNzM0MjQ0EkRwAjR3QEO1EUQzIEN2IE.jpg" },
  { name: "リンチンエン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/CA44FC49917440FD8EB2025EEC3D78F1/CljRCBTRFJUO1EEM0MEOClzQ2cDM0YURBVjRyEjQ1ED.jpg" },
  { name: "リンシンルイ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/41885D7C3770499A9C85381B508D8195/1EkM0EkMxMUNEJTN0ADMzgTM0Q0MGFjN0QzN3QzNyQD.jpg" },
  { name: "ロン・グオハオ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/B22442E916CF4E7DA6236420F7D5A65E/0gzMzQjN5IUR1czM0E0M0EENBNzQFRTNCRUO5kzMGZD.jpg" },
  { name: "マー・タオ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/3774069C21014771ABE13ABD9ED79CC2/ygjN3UDNxkjNDZTO0QERyEkQxYDNxMUOxMTQ1gzMFND.jpg" },
  { name: "アンチュウォル", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/B06E26AC48874937A55734E1FDB9C368/2Y0MGRUOwEkN1IUM0IERGFUN3Q0QEJUO2EDRCVEO2ID.jpg" },
  { name: "ニエン・ボー・ホン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/9B22B7374A754F6A9CE652D964AA69FE/DVDRzETNDFUMEV0Q0UEOFJUO4EEMwMkMyQURFNzM2kD.jpg" },
  { name: "ポン・ジンユー", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/E5FD6C1600AE41078DD7E9643EAE3884/1EjR2QDOFVENyAjQ0cjN4E0MEZTM5QDMxIDRGdzQEFD.jpg" },
  { name: "フェニックス", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/B775D05D441249608106029219972E12/0YEO5gTRFR0MzkDM0MTMEJkM5QEOxMTRykDR4UkQCRE.jpg" },
  { name: "チーリン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/CF41BF5F0395449A947577E189D48884/BhDOxEjRzUTNEFTN0QUN3kjNDVjM3EkMzYkQ3EENGRE.jpg" },
  { name: "チアオグワンジェン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/42C17AE9F72F4E6AA5F1BB23C90F8FB3/0AjMyAzNBBTOFdDN0UTO5gTMChTR0UTNDRkQGRTQxQE.jpg" },
  { name: "サン・リン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/12BC14D0BD74456285CDDC4E2037A80A/1YDMwIEM0YTQykzM0QDRFFERxAzNENjQDBjRGdDM5UD.jpg" },
  { name: "仙", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/FDA5E20EC53F4437A01B18297F8BD802/DREMDNzMEF0NzAjM0YTRykjNyADMwgDODFkMxkDMEND.jpg" },
  { name: "スン・ハンリン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/3FB452BC98D044078337620683631D15/4ETQDhDNxUTO0I0M0MjQwkTN1gTMygjMBFTRDRDN3UD.jpg" },
  { name: "スン・ホンユー", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/997EF2833FEE4808A5418FD25ABF9158/DZjR1MjNGZ0MGBzQ0Y0MyEUM3YENDBzM3ETRxE0N0kD.jpg" },
  { name: "スンジアヤン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/1A571B1605A04B0997F7A04FCD973F2D/EVzMxE0Q5YDOwUER0QzQ5IUNFRDR1MUQxYDODZTRzYE.jpg" },
  { name: "大雅", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/1899C9E6B7144D17BC7B1C6E723AC0E9/CRUOFVDMDNkQyITN0MURzIEMCNDRFJjQFNkQCRjRFNE.jpg" },
  { name: "トン・チアチュン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/171E3E60B92642059AC75B0EA58252EB/wcTOBF0Q1U0N3MER0kDNEJ0M0UEO5cjRwUjR3gTQFVD.jpg" },
  { name: "ワン・ツァンルオ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/EF6627E2362A4219942833082A0CED9F/GNEN0MTNCRjMGhDM0cDMzkjRFZTQxM0NFlDNwMTMGZD.jpg" },
  { name: "ワン・ドンイー", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/422D13042BB440BDBC86B23A9876BD87/CVEMzAjM4cTQBRUR0UEOwkjM4gTQBljRxMTQGBjRGFD.jpg" },
  { name: "ワン・スン・リン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/DD8A7B0D9E5244CE9FC879D37701BF13/0M0NEBTRzMDM3EDO0cTM1IUQ5kjRDdTNEJzN3QDM4YE.jpg" },
  { name: "ワン・ジョン・ジー", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/D511809062D9408EB903617AAF7A4BB3/yYkQ3cDNxcDOzIEO0AjN5IEMBlTMCJUMwEUR0UjQBNE.jpg" },
  { name: "ウォン・ウェイドン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/280615F2DBF64EF6B7177A7C298DF169/xYTQ3IUR4YjQyEzM0UkMBJENGNEM5ITRzYDN3YkRxkD.jpg" },
  { name: "ワンシクヘイ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/2B7A8A00AA72462A93FFE1E8C8EEDE8D/EVUOGFER5IjN4EEM0kDOBhTNCZzMzQUNwIEN0IkNEFE.jpg" },
  { name: "シエビンファ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/327891BBDB3B40C782507E106C612DA8/xMEMFJjMFNkMzEEM0Y0QDhjNBR0QzEkQxATOwMTNFVE.jpg" },
  { name: "シエ・ジアフイ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/933AA1F7CB124AFEAD21D8B2458D8CFE/yQUQxEkQ5gTOGFUM0QTMDJEMxEkQwUEMCdTRzEkQ2UD.jpg" },
  { name: "シエユーシン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/A7EBC34251EB4CBFB3B4B69F2363D5B9/ERTOCZ0M3QzQENkR0MkQGF0MCJ0QGNzM4IDR5MDMycD.jpg" },
  { name: "シュエンハオ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/52BD25C1BECA4453A4D52077268F932B/4YDO1YUQyQTNDVUR0AzN0gjNGRjRDFDM4QDOzYUQwAD.jpg" },
  { name: "シュエ・スーレン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/93324B335C794DE5BBEC6E9B9515C76E/yMTN4UkRxQDOEFEM0YTQ4kTOwQDR0YEO3AjNzADRFJE.jpg" },
  { name: "ヤン・ジアポン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/543D5B1D9988411381911153623DCFB8/2gTOBhDRyQUNCF0Q0IUM2IUMwIjMGRjM2UjR3QTNxQD.jpg" },
  { name: "ヨン・ユクヒム", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/0312D470A65743DD9BA5DE5EA8BB9D19/yIkNEhzMwgzQFR0N0cjMwgDNwUkNxU0N5QTMDBDN1EE.jpg" },
  { name: "イーチェン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/15/594DB0D7C0E74A808140C1F3107304CB/3MDR0ITQwQjQ3MER0gDM3gTN5U0QBZjRzUTQGJUR4UE.jpg" },
  { name: "ユエン・ウェイ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/723DFA5E523D493CB1375098310CAC04/BJUQCZ0NwIDR5kTM0AzN4IUMGljR3IERzkjM4IjR3gD.jpg" },
  { name: "ゾン・シャンシュエン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/E404D05DC2AE46EA88A097432D023515/ykDOyYUNCZEN3E0Q0UzNElzQ1Q0NFVUM4QTO0U0QDZD.jpg" },
  { name: "ジャンジアハオ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/A2FC14D14E9942CB96270BB5175902B2/1IkN2EzQ0MjRyYDR0EUM1kDODVEMGBjNEBDO3MzQ4EE.jpg" },
  { name: "ジャン・シーイー", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/E1A8FAF5F89742CF900FC12EF9E274AC/wMkN3YTMzQDRENTQ0MkQDF0QzATOCJEOGNEO3QTQzEE.jpg" },
  { name: "ジャン・シュンユー", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/11716D5A8BDD464FB5A574B99818072F/wYkR4E0MwMDOBNUR0QTN5gTN5EUM1UkN1QDM0AjNFZD.jpg" },
  { name: "ジャンイーホワ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/2AB7928B0BBC4FFD9B6320A5AA4D7918/FNDODF0NFZTMxkzQ0YDOzIkN2IzMFNENGZDM0kzNzUD.jpg" },
  { name: "ジャン・ユーシー", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/2726DA18DCEF47B7B0DA4F37EBDCA496/BRzQ2UkNEVDN3IkR0IjR3IUOzcTNENDR5IjM3QzMyYD.jpg" },
  { name: "ジャオグアンシュー", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/15/ADF6B569535A4723AB134A24CCC045BF/2EzQDlDN0cTNFREM0YEOGJ0QwYkR5IENCFjN1QDO4kD.jpg" },
  { name: "ジョンクン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/B76921AB75B544CF8D4B7F21BEDCCE0D/BJTNBRENGBjMGN0Q0ADOFlTN2IjNDZzMEREMwMERGFE.jpg" },
  { name: "ジョン・レンユー", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/C02D1CED88374CE49CEBABA91F933F64/xgDOzEEN0IDN3QjQ0UkMzEUQCVkQxcjNzADM1cTREVE.jpg" },
  { name: "ジョウアンシン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/66EFCAF3350C45DDAB13B5BB86D661AD/GZjR0cTR4YkQ3kTO0YDO3I0MBNDOEN0N5EkRzEUOxYD.jpg" },
  { name: "ジョウ・イエンホー", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/6848E34F7602485785F93900ABEC1C01/yUTNFVkRERURwAjM0ITNBFEO5ADMEJTOElTN1UEM2cD.jpg" },
  { name: "ジョウジョン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/10/CB5919D7F4D240E481FB507E27055C7A/DZERFZkMFVjM1cDR0EjM3EUOwMTR3QzMCNUNFBDNxUD.jpg" }
];
const rosterGrid = document.getElementById('roster-grid');
const slots = document.querySelectorAll('.slot');

// スロットに画像や名前を追加・削除する関数
function updateSlot(slot, student) {
  // 画像要素を探す
  const img = slot.querySelector('img');
  // 名前要素を探す
  const name = slot.querySelector('p');

  if (student) {
    // スロットに生徒を追加
    if (!img) {
      const imgEl = document.createElement('img');
      imgEl.src = student.image;
      imgEl.alt = student.name;
      slot.appendChild(imgEl);
    }
    if (!name) {
      const nameEl = document.createElement('p');
      nameEl.textContent = student.name;
      slot.appendChild(nameEl);
    }
    slot.classList.add('filled');
  } else {
    // スロットから生徒を削除
    if (img) img.remove();
    if (name) name.remove();
    slot.classList.remove('filled');
  }
}

// 名簿表示
students.forEach((student, index) => {
  const item = document.createElement('div');
  item.className = 'roster-item';
  item.dataset.id = index;
  item.innerHTML = `<img src="${student.image}" alt="${student.name}"><p>${student.name}</p>`;
  item.addEventListener('click', () => {
    // 既に選択済みか確認
    const selectedRank = item.dataset.selectedRank;
    if (selectedRank) {
      // 選択解除
      const slot = document.querySelector(`.slot[data-rank="${selectedRank}"]`);
      if (slot) {
        updateSlot(slot, null); // スロットから生徒を削除
      }
      item.classList.remove('selected');
      item.removeAttribute('data-selected-rank');
    } else {
      // まだ選択されていない場合、空いている最上位のスロットに追加
      let targetSlot = null;
      for (let i = 1; i <= 9; i++) {
        const slot = document.querySelector(`.slot[data-rank="${i}"]`);
        if (!slot.classList.contains('filled')) {
          targetSlot = slot;
          break;
        }
      }
      if (targetSlot) {
        updateSlot(targetSlot, student); // スロットに生徒を追加
        item.classList.add('selected');
        item.dataset.selectedRank = targetSlot.dataset.rank;
      }
    }
  });
  rosterGrid.appendChild(item);
});