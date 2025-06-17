const students = [
  { name: "アンドリュー", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/9F8504811AD24A47834FB527A2343665/1EjQ1UDOyUjQBNDN0MzQwkzQGRDRDFkN0IzN5MTR1ED.jpg" },
  { name: "あおし", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/E1CC807F55764BA3938CC9AEECB06E3F/EVkM0IER1YUMyAzN0QERxkTN3gDNDZkQ3czQClzNEVE.jpg" },
  { name: "アークティック", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/C00FADA1CF7549A190BD82C5204E9380/EJUNCFjR0UTQCNTQ0IUR2EUQGNTRxEjQ3UUQzUjN2EE.jpg" },
  { name: "ペク・ジェヒョン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/65284E46B0C04ADCA610DF21EE71FC26/GlTOGBTMFVEN4YUM0EDRxEUQ5EEO1UUN2EUOFRzMFJD.jpg" },
  { name: "バン・ジュンヒョク", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/FA404787D1E3480C8BB88F6EA2EBBE98/GNDR0UEO5ATQFJDN0YEOChTNDNEO5EDNDZUN1czN0AD.jpg" },
  { name: "バン・スファン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/F51631942D82435C9F0E1429C10AFB9F/0YjNzMjR0gjMBZkM0QjRwgDNDhjQ0UUQ4MDOxM0MGND.jpg" },
  { name: "チョ・ミョンス", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/0860EE7CDF7B425AB123AB43F469E351/1ADN3cTOycTRzkTN0U0QDFkRykzNwYEMwYDRyMkMxAD.jpg" },
  { name: "チェ・ジュンソク", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/1B47272A8B584B2FBB2B9969D479F236/BRUQEZTNEBDNBJkM0IzMzIERwMEN4cTODNUR5MTQ4IE.jpg" },
  { name: "クリス", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/424760D0DE8B40508B362995010A2B0D/DRzM5EjN3gjQCBTN0ATODF0Q0UEOBJzM3QDM1YEO0QD.jpg" },
  { name: "チェ・リブ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/A2E35B02EBC74A6E81568D30A87FDD30/5MDMyMDMyEzQBhDR0Y0M0EUQ2MkQ4QUO3cTMEJEMDRD.jpg" },
  { name: "チョン・サンヒョン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/15/B4A37B32E62D4FD390EA6389D36DC762/3MjMDJEOFNEOzYEM0EUODlTOFZTQwU0M3U0Q1YEM0UE.jpg" },
  { name: "ハム・ヒョンソ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/2818EFB3759D464E9DE8864D734F79CE/5YkNGRDRBJTNBZzN0Y0Q1gTQFZUQ0YTOGFTMCF0QwcD.jpg" },
  { name: "ハン・ヘリジュン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/EACC5E7B376E40A4942E4A9A42096D71/yUTNCN0QBFUM3YzM0IEO1I0N1gDNxE0NzYzQyM0NwkD.jpg" },
  { name: "ホ・ジオ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/3CEAFFCCB409421BB34409B2359C33E8/yQTR4IEO1gTQ0QkM0MUOyIUOElTO0MkM5UzN2cDNFJE.jpg" },
  { name: "スィ・チンウィ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/D0F24426D73B4AE58736BDD434ABAD09/3UzM2MkQxkzNwQzM0EDM4kDOEJkRER0MFdzM2U0NyYE.jpg" },
  { name: "ファン・ソンウ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/FDD2699DA67548989CB139BDA1E38F69/4YjQ4MjQ4IjRERTO0QjN1kDNBZDRxIUOyYDOwYENBRD.jpg" },
  { name: "チャン・ハヌム", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/6559F2ABAD3E4BFB8875A0A6F175FEB3/wADM3UjM2Y0NwETM0gjNyIERDdzNCZjQyMDOEJEOEJD.jpg" },
  { name: "チャン・テユン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/5D803410F6D3417892C0AFB99BE2CFD1/DJzN4IjQERkQxYkR0I0M2kDRDRzMzITO2kTMzAzM3gD.jpg" },
  { name: "チョ・ケヒョン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/A0D965339A464845BD862F5F30050B0B/xIDOCFTNEhDMGBDN0MUO1IUQ0QTOxYTO4U0QDNERCRD.jpg" },
  { name: "チョン・イジョン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/3E84ECFE3C9E425099E1669C483CE4CB/FhzM1U0Q5cDRxIDR0MDM4kDO3MDMxUTOyMDM4QUNwIE.jpg" },
  { name: "チョン・ヒョンジュン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/E4A4A3EE340148D7977F15B0934D6F96/zcTR0YjREZjNwUDN0EEMzgDNERDR4ITQ3MENxkjNwAD.jpg" },
  { name: "ジャスティン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/660068F4D0504DF38A816DB216154A57/0QkNFlzMGJTOzADN0ATM0gTMwIkQ3UkM3EURFVTODdD.jpg" },
  { name: "カン・ウジン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/3AF3476DDB514A76B66447C62450A0D5/wMTRxITNBdDM2cDO0ATMEF0QFRTR4EUOERTNCBDREVD.jpg" },
  { name: "けんしろう", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/AB0ACD324C044A28B97C12AD6745F8C6/EVkN2kTM5UUO0QjQ0Y0Q5IERyQkNCNTQGVTM5QzMGdD.jpg" },
  { name: "キム・ダニエル", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/09ECC4F4DC16411F8A1CBB11711FA35B/0UUMEljQ0EURGF0N0QzQ1EEMDNjNDJ0N4UTREdTOGBD.jpg" },
  { name: "キム・ドンヒョンA", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/DD543AF6DDD241DFBEF0CFCD3B263D8B/GlTM4kDM1IkM0MTN0I0M5EERyQ0QwATQBVUNDBjQ0YD.jpg" },
  { name: "キム・ドンヒョンB", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/EB3D0B6EF4A04EE3B93BF1A379A3F3E7/yMENxcTM4EjMDZjM0U0Q5IkR5UzMEBDNzQDNGVTNxYD.jpg" },
  { name: "キム・ドンユン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/6B9ED488B6FE419FB356A30A14D60D7F/DREOBZUNwUEO1QDM0cTQ1EEOyUkQEFkMxEDRFRDNGVE.jpg" },
  { name: "キム・ゴンウ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/83B4054B7D734F6F9E1C1870395A9855/wMTQ3cjQzQER2U0Q0YENwgTR0gzQzYjMwQ0QxczQ0MD.jpg" },
  { name: "キム・ヒョンソ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/1BAF55ED67CF481BB2BA45E94E4B47D2/yIUQFFkNBlDM3kDM0I0N3kTRBNTQDRDNCFUNyIzMBJD.jpg" },
  { name: "キム・ヒョンビン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/496D2C412436496D92C22BE560775285/FZkQ0IkM3EkM0UUQ0IEO3kjMClzQ0cjNBFDO3kzQygD.jpg" },
  { name: "キム・インフ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/E2A6F95DC852429384FD80E44ECF174D/ElDR0cDRGlTN5Y0M0IkQxEENCNUOyQDN5MTRFNUMyAD.jpg" },
  { name: "キム・ジェヒョン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/3ED3B5FA260D4D7B906FEC46CB348C53/zkjN2YURyEUOBZEN0AjQEljMBRURFdTQ0ITN5QkNwgD.jpg" },
  { name: "キム・ジュンミン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/027D5A08000447B4A26FCE3D2DA66470/2cTNEdzNEZDNzADO0M0NGFEMEJjQ0AzMCFkR4M0QyYE.jpg" },
  { name: "キム・ジュンソ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/15/56BF6F1722E04BAA80C17310F221B388/xADR3kTO0UDOyATN0cTMDhzQGVzQwkTR2ATQ1EjN1AD.jpg" },
  { name: "キム・ミンジュン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/15FF5F3545F84881A46021134036F6B7/yIUN1QDRCRUQ0cTM0gTQwkzN3IEMGFTOGZUM4ETOzQD.jpg" },
  { name: "キム・シファン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/3E592743CC85434EAFCB076270CE83BC/4kTOykTOFVDOyEzQ0Q0QBlDRFZEOwUjM3kTNxUkN3ME.jpg" },
  { name: "キム・テジョ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/EC94DEF23AC2437A932CD58C582675AD/DFUM3M0NyMjRFFjM0MERFlDR5QzNwUERwcDMxITR3YD.jpg" },
  { name: "キム・ウォンビン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/49973086158D46FC93B20A7B38C13489/DljQycjQBRTOGVjN0UkRwIkMGljR2EjQCFDMyMDRGJE.jpg" },
  { name: "キム・ヨンジュン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/41BE6685898A40AAB1B1A853A1D63FF6/2gDRBRTQFVUNDREN0YjQDFkR3IDMwcDMzEDNBFkNDJE.jpg" },
  { name: "クォン・ギュヒョン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/0463B38F86C84F6C866F91EF4017A473/1YkNxEkQCVjRERDM0MTN0kTNBVjN4gjNBhTR0MTMCJE.jpg" },
  { name: "イ・ドンホン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/1A91E75A85D945FDAD3F84622DDE13A3/zYTMDZURyIUR0cTO0MTNwkTREVjMxATMDJUNzIUR2MD.jpg" },
  { name: "イ・ヒョプ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/15/EB95813CE0FF4250BA4D08296B62ADC1/3YEO5ETM3MTMDNkQ0YzN1gTR3EzQ0czQDBTMzUEOFBD.jpg" },
  { name: "イ・リオ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/AEAEEC9E7BB84918AFAABFDA25D41DA4/BR0MGhDR1gTN2kjQ0QDOFhTN1AjN5kDMFdDM0YDNDdD.jpg" },
  { name: "イ・サンウォン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/15/2B164EA65EA8476795AA59829794C717/1QURykjNGJUQCNUO0U0QwEEM3ATO5MkN0QTOChzNzYD.jpg" },
  { name: "イ・スンベク", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/553CC2BBB1A443CEBF2863A4D4D1409F/1QENDdTNGJzM4UEM0ATQFlTMFVDR0YTRwQ0Q1QUNwMD.jpg" },
  { name: "イ・ウォヌ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/DAD2F10DDA564DEDAEA8B26340D1F755/zEDNzYjRBVkQDFjM0QDNyEUO4EkQDNjMxYURDlDM3MD.jpg" },
  { name: "イ・ユンチャン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/32CBE05BCF3E4766BA0E8839C4CD7DA6/wkTN2ADOyIzMxIjQ0ITM1kzQEJ0MzQUQCFjNGRUQEFD.jpg" },
  { name: "まさと", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/6A2C698A94054E07A6AC7232444C5BF9/wUDR4UDM0ATM5YTN0EkQFJ0MERjQCdDMzkTNDF0M2cD.jpg" },
  { name: "ムン・ソンビン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/CA78FDD166604FF2B88A25741FCB96EF/5MTRxYURGVkRCFzQ0ITOGhDN0kDNwYUMyQDO1UEM4ED.jpg" },
  { name: "ムン・ウォンジュン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/41D1A1163252491C96D3023A84B9BF1D/GhzNClzN4IjNGZkN0ETOzEkMxADNzYEMwADN5UjQFRD.jpg" },
  { name: "ナ・ユンソ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/C5310EE586934B54B7DFC13533E88114/BdTN3ATRwMTQFV0M0ETQ3IUMwIDRyAjMFZER5MDR4YD.jpg" },
  { name: "ノ・フィジュン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/04C0351D63C84288B0ECB7C63CF3FE58/wQDMzMEO0IkNFVDM0MEOygzNxMkM3ADMFZkRxIzNFZD.jpg" },
  { name: "オ・ジュンホ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/1D7E9433BCD64199B37BE9F2873B9493/2IjQ0QjM0YUM1QTN0EkN0EENDNTOwQTQFJkR0Y0MCdD.jpg" },
  { name: "パク・ドンギュ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/CB100AA97343424FAB3A6983E9F86CCD/FVENClzQwUEMygDN0IzQ4IURwYzQFZkQzIjR0IUNzQE.jpg" },
  { name: "パク・ジミン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/8962B7F925E64EB2A129FD2AFD6C4328/FVzNwYUNyETQ1IkN0UUNGlDO5MzMEFkQClzN0YUQ0MD.jpg" },
  { name: "パク・ジュンイル", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/7B757876468F4416AAB760073080AFEF/wEkN1EzM2YEO2kTM0I0Q4kzQBFkNFJTR3EURzYUM1QD.jpg" },
  { name: "パク・ジュンソン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/AEBA57DEF3C749308CA7EC8FE797F57C/DdTNBNzN2QUNzIER0YEMCFkQxYDMEFUM5EEN0YUNxID.jpg" },
  { name: "パク・ヌリ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/B36540261D44498FBED6B1DAEBCF819A/GljN5MENxEDM0Q0N0IUN5EkMDVUMyIzNBZUO3kzNzYE.jpg" },
  { name: "パン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/4EC4A1C20702448AA6C71744FCAD7C9D/GFDO0UkRBJjNwIkR0YjQygjN5YzMzkDOwIUMFVTR2kD.jpg" },
  { name: "リオン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/B55CCDA5331E4B5797491D144394FCD6/BhDOyATM5UTOxMDN0MEO2E0NEBjR1gTRxMEOEVTQCFE.jpg" },
  { name: "れんしょう", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/19ACDE63F3084C9683E60D0EB02A4435/yMDM3YEN4YkNGJjQ0YkRwkTRwEzQwY0QzMUREZTQwgD.jpg" },
  { name: "ライアン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/ACE6EBFBC69D461692246BB07EA6A1A9/2IkQyQzMDZDOzEUM0UTNxEUQ2IERxM0QFBTNBN0NzED.jpg" },
  { name: "ソ・ウォン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/15/C744C94F921E43BDBBCE56E8898297C9/wMkMFRUN5UkM0AjM0kzMBhzM4M0MBZkMCBTQ0EDR0UD.jpg" },
  { name: "シン・ジェハ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/157A052D9CFF4502BBD9B2C4C958FFAF/1gjR1EDR1MzQCJDN0UjR4EEMEVTO3UEN0gjN0QkN4ID.jpg" },
  { name: "しょう", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/68A15D6FFCF049E590155FC3509BE802/3U0M0UUOERkRxIDO0UEMwgzN2EEN2QENCJkM5kDR2kD.jpg" },
  { name: "しょうや", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/72BFB1DF84FB4BC5BD65E76B77B31463/4YERFBDREJDMzMzN0QEO0gDNwMTQBZEM0ITQGZUMyQD.jpg" },
  { name: "ソン・ミンジェ", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/03B72CA661614B0C8ED37FF1FF6FE5B9/DlDNBZUO1YkNFZjQ0IkNFF0NzMTOEFUQwgTRwATRBVD.jpg" },
  { name: "太地", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/3315351B1B54406A950B37E861CE5960/zEDRwIUMzMTM4YkM0ADM2kDNGVUOGNzMDZ0M4QER5UD.jpg" },
  { name: "たつき", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/15C73409FDF24C7B94A03FD5EC91CB23/yQ0N4IUNEJDNwYEO0kDRDJEOwYDOzEDMzQjQwUTMERD.jpg" },
  { name: "タナトーン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/C6630C1BE0994BB38E03E68619480F93/xcDMFBjQBFUQzcDO0MjQEhTOwEzQDJ0MBNzQEJkNxkD.jpg" },
  { name: "ともや", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/DD302B994FBC4B6887E6DD568D6F723C/DNzNyQTR3QTM5ITN0gTNzkzMCFEOzcTQyUEN2UkQwUD.jpg" },
  { name: "ヤン・ダウィット", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/05/30/166024EA5BC14006985E24E1EA122EA5/FFTQ2UENzYUMFBzN0kjQ0kzQzU0M4EjMxADOBNzMFFE.jpg" },
  { name: "ヤン・ヒチャン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/339D7E16D2864A17BCDDBA15A2742200/EFjQBRTNFVERxYDO0IDMChjRCR0MCBDOyQkM3EUQzIE.jpg" },
  { name: "ヨム・イェチャン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/506473BA87434E1094C7E6E9134E8EF0/DZkM4Y0N1YUQxkTR0gTM1gTN4MkM3kjN2ETOBhzMyUE.jpg" },
  { name: "ユ・カンミン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/15/6D8D615369164AEF93529F2E930FCDF3/zEUMycDMGFUOCBjR0MDRxIUO3gTOzIkR1EUMBFERxMD.jpg" },
  { name: "ユ・ギウォン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/4B8A06D1C0734E0C9DCE619DC6AD2CE4/wkDO0U0MwUENwIjM0cDNxIUQEljMBhjQ3gjNFFUR4gD.jpg" },
  { name: "ユン・ミン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/71762B77AB2A4ACD87187AA5BADC6F32/GFjMCFjNyQkQBNTM0IjMBhDRFZUM3ITNzETMEFUQ0MD.jpg" },
  { name: "ゆめき", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/39EC406202F749FE95A2CFFD1730F848/CdDRzQTM3EjQzgjQ0UkR1EkQ3QEOGRUQ2IzNDZkMChD.jpg" },
  { name: "ユセン", image: "https://image.cdn.mnetplus.world/mnetplus/images/2025/06/02/8966376AEA8649BE9C071A3683BC5B42/ygTOyUjQxIUO3IEO0QjQBlTMxQTQGlDMxYURCNkN0ME.jpg" }
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