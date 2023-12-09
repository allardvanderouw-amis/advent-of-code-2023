const input0 = `
0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45
`
const input1 = `
10 13 16 21 30 45
`

const input2 = `
9 18 46 116 276 615 1284 2530 4774 8797 16131 29777 55390 103097 190178 344982 612707 1064056 1808240 3012174 4927668
-4 -12 -25 -31 -5 104 413 1194 3057 7310 16632 36263 75998 153370 298520 561380 1021938 1804512 3097133 5177325 8445773
1 1 5 24 83 222 495 982 1854 3567 7308 15874 35234 77104 162956 329984 639663 1189661 2129999 3684500 6178725
10 16 34 81 191 420 848 1578 2732 4444 6850 10075 14217 19328 25392 32300 39822 47576 54994 61285 65395
26 43 66 107 182 304 474 669 826 832 572 186 883 7031 30941 103128 293635 755982 1818159 4172274 9270105
-1 11 40 101 219 429 776 1315 2111 3239 4784 6841 9515 12921 17184 22439 28831 36515 45656 56429 69019
29 55 96 170 314 596 1138 2152 4004 7348 13424 24713 46321 88767 173332 341853 673895 1315693 2527224 4756356 8752348
26 41 53 59 57 44 20 1 35 205 595 1197 1768 1752 672 109 9992 65289 265785 863823 2446291
-2 15 46 91 150 223 310 411 526 655 798 955 1126 1311 1510 1723 1950 2191 2446 2715 2998
8 21 32 50 107 269 647 1408 2786 5093 8730 14198 22109 33197 48329 68516 94924 128885 171908 225690 292127
15 22 41 93 222 511 1098 2187 4057 7099 11972 20084 34798 64066 125641 256648 530155 1082524 2156795 4169223 7808414
3 -1 -7 -1 53 221 607 1361 2687 4851 8189 13115 20129 29825 42899 60157 82523 111047 146913 191447 246125
22 48 99 184 318 527 853 1364 2176 3496 5697 9438 15844 26763 45119 75382 124178 201064 319495 498012 761682
29 42 63 113 237 520 1114 2283 4482 8510 15835 29318 54818 104617 204377 406627 815954 1634892 3246488 6362711 12293194
-10 -15 -23 -41 -82 -152 -216 -127 520 2696 8592 22987 56041 128849 284194 606807 1260494 2554291 5057111 9791127 18549628
-3 2 23 75 190 437 951 1964 3833 7063 12318 20402 32209 48777 72006 107570 173385 319988 673457 1516729 3430148
10 24 58 133 275 525 965 1770 3300 6244 11832 22171 40905 74794 137746 260855 516006 1068052 2283634 4946565 10664743
17 37 71 123 193 281 398 584 933 1625 2965 5429 9717 16813 28052 45194 70505 106845 157763 227599 321593
-1 15 56 133 262 475 842 1515 2825 5508 11214 23564 50150 105986 218946 437556 840971 1549821 2734516 4614111 7433366
-2 6 26 69 155 327 689 1481 3205 6821 14044 27800 52963 97641 175584 310869 547044 964612 1713402 3070379 5539247
1 11 45 130 301 597 1056 1718 2655 4054 6391 10775 19670 38558 79985 173423 388553 887741 2038549 4643544 10388983
14 41 90 174 313 548 981 1868 3805 8060 17117 35511 71046 136501 251942 447771 768656 1278499 2066612 3255284 5008935
3 -3 -2 19 71 164 307 513 829 1423 2774 6037 13707 30798 66890 139558 279807 540025 1004306 1799227 3099391
-7 -3 22 79 174 311 498 752 1099 1565 2154 2809 3352 3399 2246 -1278 -8995 -23603 -48946 -90333 -154910
15 37 76 139 233 365 542 771 1059 1413 1840 2347 2941 3629 4418 5315 6327 7461 8724 10123 11665
4 -5 -5 23 111 326 808 1830 3900 7950 15694 30293 57555 108040 200639 368417 667645 1190782 2083358 3562732 5932764
7 4 0 2 29 122 359 875 1892 3771 7108 12913 22940 40280 70385 122745 213461 368890 630296 1058896 1739663
20 38 64 98 153 264 505 1021 2090 4257 8631 17507 35565 72001 144052 282476 539624 1000776 1799386 3136768 5306529
16 32 59 97 159 287 567 1145 2251 4245 7704 13563 23292 39016 63342 98417 143370 188750 205817 127525 -183299
8 31 70 132 241 462 943 1978 4090 8129 15376 27640 47331 77488 121737 184150 268972 380179 520826 692140 892309
10 22 34 46 58 70 82 94 106 118 130 142 154 166 178 190 202 214 226 238 250
12 28 71 167 359 724 1407 2679 5030 9326 17100 31126 56586 103495 191838 362562 701032 1386473 2794531 5706776 11733117
-4 -2 12 42 103 231 496 1026 2063 4095 8145 16363 33187 67557 137044 275378 545834 1064400 2038774 3832220 7065395
-2 10 28 50 85 167 374 850 1840 3774 7474 14611 28624 56466 111814 220819 432086 833270 1577168 2919880 5271427
2 8 29 77 171 341 643 1199 2295 4596 9576 20331 43086 90014 184648 372584 743158 1473984 2922985 5818429 11649307
24 37 52 69 88 109 132 157 184 213 244 277 312 349 388 429 472 517 564 613 664
7 16 37 70 115 172 241 322 415 520 637 766 907 1060 1225 1402 1591 1792 2005 2230 2467
7 9 25 68 153 301 544 931 1535 2461 3855 5914 8897 13137 19054 27169 38119 52673 71749 96432 127993
3 -1 7 49 166 439 1034 2293 4917 10335 21447 44105 90014 182296 365930 726922 1426767 2763115 5274351 9916141 18353334
-4 5 22 43 71 134 314 791 1914 4322 9162 18512 36264 70050 135475 265245 528204 1067511 2174186 4423405 8918073
8 8 20 55 136 304 617 1142 1957 3219 5434 10214 22061 52125 125497 294483 661534 1417162 2900344 5691705 10753286
1 3 13 50 154 403 936 1995 4012 7791 14875 28245 53569 101297 189972 351182 636595 1127475 1946945 3275012 5365964
8 9 22 59 144 332 740 1587 3238 6246 11385 19665 32316 50721 76267 110067 152484 202359 255808 304407 332528
24 52 96 174 328 648 1308 2620 5121 9717 17917 32199 56559 97303 164151 271731 441550 704538 1104270 1700980 2576490
-7 -5 13 71 206 468 920 1638 2711 4241 6343 9145 12788 17426 23226 30368 39045 49463 61841 76411 93418
12 22 35 52 74 102 137 180 232 294 367 452 550 662 789 932 1092 1270 1467 1684 1922
7 22 44 83 166 340 665 1207 2056 3409 5773 10358 19745 38929 76852 148556 278101 502408 876202 1478245 2419064
8 26 48 73 100 128 156 183 208 230 248 261 268 268 260 243 216 178 128 65 -12
0 1 -3 -4 18 109 371 1018 2474 5548 11775 24131 48562 97198 194907 392243 790276 1586899 3160913 6220790 12061258
7 16 25 34 43 52 61 70 79 88 97 106 115 124 133 142 151 160 169 178 187
4 10 16 22 28 34 40 46 52 58 64 70 76 82 88 94 100 106 112 118 124
-1 5 18 39 78 166 372 842 1886 4153 8965 18944 39179 79364 157617 307091 587041 1100749 2023668 3646365 6438364
8 22 40 72 137 277 590 1283 2748 5684 11349 22171 43263 86048 176533 373349 805440 1747710 3767222 7995854 16622077
10 20 50 123 275 555 1025 1760 2848 4390 6500 9305 12945 17573 23355 30470 39110 49480 61798 76295 93215
11 10 20 50 109 206 348 539 790 1168 1960 4134 10472 28054 73210 180682 419719 921627 1926971 3868278 7519431
3 18 48 111 247 524 1043 1949 3471 6041 10593 19246 36770 73575 151546 315096 651863 1331732 2681734 5332353 10505669
-2 -7 -8 4 51 180 479 1103 2319 4582 8657 15805 28054 48579 82218 136154 220796 350895 546934 836834 1258021
6 14 26 38 45 42 24 -15 -79 -141 -20 1017 5369 19931 62761 177810 465668 1144548 2665818 5924016 12624697
-3 8 34 87 188 381 770 1595 3368 7097 14633 29171 55903 102758 181157 307085 504388 816931 1347951 2371102 4612619
7 -3 -7 10 72 230 591 1356 2865 5647 10473 18410 30874 49680 77087 115836 169179 240897 335305 457242 612044
14 21 39 77 145 267 502 973 1904 3665 6825 12213 20987 34711 55440 85813 129154 189581 272123 382845 528981
11 17 23 29 35 41 47 53 59 65 71 77 83 89 95 101 107 113 119 125 131
8 1 -11 -28 -50 -77 -109 -146 -188 -235 -287 -344 -406 -473 -545 -622 -704 -791 -883 -980 -1082
0 -9 -8 19 104 310 754 1657 3464 7112 14568 29824 60662 121768 240309 466084 890103 1678388 3132763 5799180 10660663
9 19 44 89 157 242 323 360 297 90 -189 -46 2229 11456 39806 115816 302697 734001 1680486 3671075 7704557
25 49 84 129 189 294 530 1090 2361 5071 10528 20991 40221 74268 132558 229352 385657 631677 1009900 1578925 2418141
11 22 54 116 217 366 572 844 1191 1622 2146 2772 3509 4366 5352 6476 7747 9174 10766 12532 14481
3 -1 -5 -9 -13 -17 -21 -25 -29 -33 -37 -41 -45 -49 -53 -57 -61 -65 -69 -73 -77
26 33 31 23 20 48 174 565 1595 4016 9210 19540 38819 72917 130527 224112 371056 595043 927689 1410453 2096854
7 14 21 29 36 38 28 5 18 284 1449 5140 15156 40116 99404 236311 546138 1233799 2726610 5885200 12380585
12 24 52 125 285 584 1094 1941 3368 5818 10001 16864 27315 41456 56951 65988 50084 -28276 -238486 -700841 -1613855
13 17 37 90 209 468 1023 2176 4475 8886 17135 32454 61235 116599 225772 444629 885065 1764239 3489437 6798422 12982565
19 41 77 133 217 346 566 1006 2015 4479 10487 24612 56193 123142 257948 516697 992059 1831293 3260369 5615279 9381481
16 28 35 31 10 -20 -10 170 784 2296 5449 11357 21610 38392 64612 104048 161504 242980 355855 509083 713402
28 42 68 122 233 457 897 1729 3234 5836 10146 17012 27575 43331 66199 98595 143512 204606 286288 393822 533429
15 13 23 65 179 438 956 1893 3463 5967 9930 16559 29002 55329 114871 250765 553784 1206951 2569594 5338863 10867842
12 19 39 72 119 197 367 784 1780 3986 8494 17082 32630 60145 109479 202244 388361 783610 1651246 3573133 7797258
7 8 19 49 113 256 607 1478 3523 7972 16955 33931 64237 115772 199831 332104 533855 833296 1267171 1882565 2738953
29 58 102 158 232 366 677 1405 2973 6090 12001 23150 44853 89211 183633 388284 829937 1764646 3689092 7531306 14966890
2 0 -1 -1 0 2 5 9 14 20 27 35 44 54 65 77 90 104 119 135 152
2 12 40 105 237 479 899 1615 2834 4912 8476 14746 26410 49822 100038 211463 458918 997120 2131404 4439675 8975935
8 12 15 15 15 37 141 445 1141 2506 4932 9075 16398 30727 62048 134773 304254 687624 1518333 3238311 6647865
-3 0 13 40 82 137 200 263 315 342 327 250 88 -185 -598 -1183 -1975 -3012 -4335 -5988 -8018
10 20 39 78 170 383 843 1776 3575 6899 12821 23066 40423 69482 117943 198874 334464 562030 943299 1578302 2625592
3 1 5 30 113 320 750 1536 2843 4863 7807 11894 17337 24326 33008 43464 55683 69533 84729 100798 117041
11 22 37 61 99 156 237 347 491 674 901 1177 1507 1896 2349 2871 3467 4142 4901 5749 6691
9 25 56 112 208 367 625 1052 1813 3306 6427 13015 26502 52709 100605 182863 316823 529608 880266 1534525 2979054
11 30 78 182 383 746 1391 2554 4681 8561 15542 27997 50499 92753 176401 349609 716183 1490248 3093758 6322888 12621407
21 43 87 171 328 617 1134 2023 3487 5799 9313 14475 21834 32053 45920 64359 88441 119395 158619 207691 268380
-6 2 29 82 180 378 798 1669 3386 6603 12368 22283 38630 64362 102872 157664 232762 336492 495195 791192 1453616
13 20 43 89 157 246 370 580 998 1873 3674 7240 14012 26377 48159 85297 146755 245714 401101 639515 997615
11 22 25 25 44 132 390 1021 2427 5377 11296 22786 44626 85795 163685 312898 603275 1175680 2310339 4552183 8931808
-1 7 28 78 194 444 949 1925 3753 7085 12994 23176 40212 67898 111651 178999 280163 428739 642488 944242 1362934
18 29 45 75 134 247 460 865 1656 3247 6508 13230 27064 55505 114252 236959 496935 1054429 2256583 4841522 10340513
-1 7 23 49 99 224 560 1416 3427 7799 16661 33502 63593 114151 193762 310208 465306 644622 798854 811926 447438
-2 4 25 70 144 245 361 467 522 466 217 -332 -1316 -2901 -5287 -8711 -13450 -19824 -28199 -38990 -52664
25 39 48 48 35 5 -46 -122 -227 -365 -540 -756 -1017 -1327 -1690 -2110 -2591 -3137 -3752 -4440 -5205
5 13 31 61 108 181 302 532 1023 2099 4366 8877 17480 33727 65224 129212 264762 557837 1191044 2541559 5376101
18 35 66 127 247 468 845 1446 2352 3657 5468 7905 11101 15202 20367 26768 34590 44031 55302 68627 84243
17 27 35 46 69 112 176 261 420 937 2763 8417 23640 60168 140050 301960 609915 1164687 2117955 3688848 6181943
9 0 -9 -12 -3 34 145 430 1061 2280 4359 7500 11649 16194 19513 18334 6865 -24352 -89913 -211404 -419691
9 5 1 -3 -7 -11 -15 -19 -23 -27 -31 -35 -39 -43 -47 -51 -55 -59 -63 -67 -71
21 45 78 128 213 371 677 1273 2424 4616 8724 16333 30461 57335 110742 222282 464582 1002371 2203003 4873464 10764932
19 38 76 143 241 362 487 586 619 538 290 -179 -919 -1970 -3355 -5072 -7085 -9314 -11624 -13813 -15599
1 -5 -15 -29 -35 13 231 870 2438 5917 13113 27160 53166 98958 175892 299794 492341 783633 1217467 1862267 2833769
16 19 37 90 206 434 877 1766 3617 7538 15786 32740 66613 132577 258695 497469 948605 1804277 3440098 6600426 12780635
3 19 49 106 210 398 748 1412 2662 4977 9237 17134 31940 59751 111195 203265 360297 612003 984693 1479134 2024602
5 8 17 47 128 321 753 1677 3569 7290 14380 27638 52317 98581 186397 354832 678833 1297972 2463223 4609329 8461202
15 37 77 154 310 618 1185 2147 3649 5808 8685 12357 17296 25443 42625 83316 179203 393599 844461 1739636 3428986
-5 2 22 51 82 118 200 451 1132 2699 5841 11468 20605 34133 52301 73914 95081 107384 95304 32713 -121788
7 6 6 10 27 78 199 441 867 1546 2544 3912 5671 7794 10185 12655 14895 16446 16666 14694 9411
-3 5 17 31 55 128 363 1022 2633 6159 13229 26441 49747 88930 152183 250800 399989 619817 936297 1382627 2000591
5 7 4 -4 -17 -35 -58 -86 -119 -157 -200 -248 -301 -359 -422 -490 -563 -641 -724 -812 -905
9 15 26 39 53 71 102 163 281 495 858 1439 2325 3623 5462 7995 11401 15887 21690 29079 38357
16 30 58 109 192 316 490 723 1024 1402 1866 2425 3088 3864 4762 5791 6960 8278 9754 11397 13216
7 14 37 76 135 237 453 953 2086 4493 9252 18047 33344 58546 98086 157402 242721 360560 516831 715414 956037
8 28 63 113 178 258 353 463 588 728 883 1053 1238 1438 1653 1883 2128 2388 2663 2953 3258
14 35 81 177 357 661 1132 1813 2744 3959 5483 7329 9495 11961 14686 17605 20626 23627 26453 28913 30777
19 23 40 91 212 463 937 1769 3145 5311 8582 13351 20098 29399 41935 58501 80015 107527 142228 185459 238720
-7 -14 -17 3 91 343 948 2261 4932 10129 19908 37800 69704 125196 219387 375488 628267 1028612 1649445 2593265 4001633
-10 -20 -20 8 96 301 714 1463 2704 4606 7376 11452 18130 31099 59650 124715 269394 576256 1194468 2380728 4559068
-3 -5 -10 -9 18 102 285 620 1171 2013 3232 4925 7200 10176 13983 18762 24665 31855 40506 50803 62942
13 37 85 167 293 473 717 1035 1437 1933 2533 3247 4085 5057 6173 7443 8877 10485 12277 14263 16453
13 19 36 75 142 251 464 981 2323 5690 13646 31396 69081 145715 295584 578035 1091437 1991393 3511488 5981061 9827180
7 16 25 34 43 52 61 70 79 88 97 106 115 124 133 142 151 160 169 178 187
6 23 56 123 272 609 1345 2876 5918 11735 22530 42125 77144 139041 247491 435894 760038 1311335 2236492 3766015 6254576
8 14 30 59 106 193 388 855 1942 4344 9420 19840 40971 83961 172715 359576 759804 1625179 3496332 7509036 15994708
13 25 54 118 251 522 1075 2202 4463 8879 17266 32881 61755 115451 216617 409843 782490 1504399 2903817 5613544 10853756
14 36 78 148 259 449 822 1614 3284 6626 12894 23928 42265 71215 114878 178074 266154 384656 538766 732540 967839
-2 -2 -9 -20 -9 103 508 1625 4301 10154 22162 45706 90491 174201 329580 618230 1157495 2172796 4099550 7781904 14860582
-3 -9 -17 -16 14 106 312 711 1437 2778 5458 11325 24852 56138 126512 278510 593250 1220954 2436618 4746995 9105779
-5 3 25 67 150 333 742 1598 3234 6087 10638 17240 25714 34515 39216 30125 -10783 -112477 -313885 -652503 -1129566
20 29 34 29 8 -24 -32 76 484 1511 3662 7687 14648 25994 43644 70078 108436 162625 237434 338657 473224
1 6 18 30 30 7 -25 33 486 2059 6243 15819 35613 73542 142018 259784 454263 764508 1244848 1969332 3037080
-3 2 11 33 85 192 387 711 1213 1950 2987 4397 6261 8668 11715 15507 20157 25786 32523 40505 49877
15 37 69 117 211 434 973 2203 4826 10118 20397 39921 76559 144741 270369 498591 905866 1619531 2853749 4986546 8742298
-5 7 40 100 202 383 725 1404 2793 5664 11559 23436 46746 91164 173284 320698 578015 1015541 1741538 2919212 4789850
25 39 61 105 205 430 899 1796 3385 6025 10185 16459 25581 38440 56095 79790 110969 151291 202645 267165 347245
0 2 8 23 63 172 461 1185 2895 6739 15036 32298 66907 133641 257154 476315 848967 1456169 2404397 3823750 5860552
-2 0 3 10 34 108 308 795 1882 4132 8493 16476 30382 53584 90870 148853 236454 365464 551191 813198 1176138
2 -3 -17 -36 -49 -36 52 341 1121 2988 7060 15283 30833 58603 105733 182075 300387 476150 728272 1087961 1642414
21 41 69 101 134 162 180 216 427 1321 4205 12011 30720 71690 155300 316450 612609 1135281 2025965 3497921 5865322
0 5 15 27 38 45 45 35 12 -27 -85 -165 -270 -403 -567 -765 -1000 -1275 -1593 -1957 -2370
25 35 36 36 50 94 180 313 501 823 1671 4403 12828 36204 94779 229356 516929 1095131 2199070 4215118 7757374
2 22 53 86 107 97 32 -117 -384 -808 -1433 -2308 -3487 -5029 -6998 -9463 -12498 -16182 -20599 -25838 -31993
2 6 18 55 154 387 883 1860 3680 6959 12796 23236 42161 76923 141212 259914 477090 868736 1562714 2769233 4826576
16 18 18 21 52 176 525 1332 2972 6010 11256 19827 33216 53368 82763 124506 182424 261170 366334 504561 683676
16 33 66 138 283 558 1075 2067 4021 7950 15957 32403 66278 135853 277440 561198 1118502 2187559 4186844 7829688 14298141
-3 -9 -16 -24 -33 -43 -54 -66 -79 -93 -108 -124 -141 -159 -178 -198 -219 -241 -264 -288 -313
4 20 42 69 109 202 459 1128 2713 6208 13593 28915 60601 126195 261567 537917 1091718 2175256 4238800 8059861 14940689
-4 5 35 94 203 410 804 1529 2798 4907 8249 13328 20773 31352 45986 65763 91952 126017 169631 224690 293327
18 19 13 8 39 192 652 1786 4270 9279 18791 36124 66953 121296 217458 390060 706976 1306281 2478279 4847070 9764689
18 31 62 118 208 349 572 928 1494 2379 3730 5738 8644 12745 18400 26036 36154 49335 66246 87646 114392
10 30 70 147 278 476 747 1088 1486 1918 2352 2749 3066 3260 3293 3138 2786 2254 1594 903 334
23 40 61 99 197 443 983 2036 3922 7128 12476 21566 37933 69921 137341 285808 615565 1335968 2863027 5985897 12139425
16 39 81 144 237 388 669 1246 2474 5076 10475 21393 42904 84261 162091 306176 570528 1056017 1959039 3679100 7057855
5 19 52 116 229 416 718 1233 2228 4376 9187 19717 41654 84895 165743 309868 556191 961865 1608542 2610130 4122259
8 21 34 47 60 73 86 99 112 125 138 151 164 177 190 203 216 229 242 255 268
0 9 22 34 46 69 122 222 364 489 438 -110 -1718 -5291 -12198 -24418 -44712 -76823 -125706 -197790 -301274
4 6 10 6 -8 2 158 754 2374 6047 13477 27507 53276 101163 193829 381839 776008 1610516 3359988 6947468 14100248
17 31 55 89 131 174 215 285 518 1304 3634 9876 25482 62648 148008 338603 754745 1647147 3532835 7467169 15580487
-1 -4 -13 -35 -77 -144 -237 -351 -473 -580 -637 -595 -389 64 867 2145 4047 6748 10451 15389 21827
0 -1 1 5 9 18 69 285 970 2757 6821 15169 31019 59280 107145 184809 306324 490603 762585 1154573 1707757
13 16 28 69 172 390 811 1595 3071 5983 12075 25390 54972 120159 260406 552658 1140793 2283674 4430998 8339531 15246604
6 17 25 29 38 75 190 498 1259 3011 6765 14301 28724 55758 106960 207430 413198 848255 1780087 3769435 7962404
12 32 67 117 182 262 357 467 592 732 887 1057 1242 1442 1657 1887 2132 2392 2667 2957 3262
11 13 25 63 150 335 725 1526 3089 5975 11103 20153 36614 68297 132969 270360 566767 1203849 2552597 5349347 11016726
20 44 80 128 188 260 344 440 548 668 800 944 1100 1268 1448 1640 1844 2060 2288 2528 2780
8 22 43 83 176 393 873 1878 3881 7709 14799 27712 51245 94882 178083 341241 667334 1322744 2630891 5199833 10135534
6 0 -10 -22 -18 48 271 835 2089 4687 9847 19868 39276 77522 155333 319153 672521 1441306 3104306 6647213 14047061
19 41 92 198 405 802 1569 3060 5931 11323 21110 38222 67053 113964 187891 301068 469875 715821 1066672 1557734 2233301
16 42 84 151 256 423 702 1198 2140 4062 8260 17854 40057 90678 202517 440212 925348 1877326 3677720 6968741 12800114
0 -5 -2 17 57 127 253 497 990 2000 4066 8219 16254 30878 55306 91524 136173 173504 167923 68476 -137052
3 2 12 56 167 389 778 1402 2339 3672 5480 7824 10727 14147 17942 21826 25315 27662 27780 24152 14727
1 12 36 67 97 119 130 134 145 190 312 573 1057 1873 3158 5080 7841 11680 16876 23751 32673
-1 -9 -16 -17 -7 19 66 139 243 383 564 791 1069 1403 1798 2259 2791 3399 4088 4863 5729
-8 2 40 129 303 611 1127 1974 3382 5821 10280 18802 35433 67800 129599 244349 450852 810892 1419808 2420687 4023043
11 21 47 111 247 515 1027 1983 3715 6751 11958 20936 37069 68098 131975 269496 570539 1226901 2635701 5596005 11671835
-3 2 30 96 215 402 672 1040 1521 2130 2882 3792 4875 6146 7620 9312 11237 13410 15846 18560 21567
7 10 22 61 167 406 869 1670 2967 5063 8688 15616 29831 59521 120247 239703 464551 869880 1571898 2744519 4640551
10 8 5 2 9 65 282 931 2602 6509 15091 33203 70430 145441 293899 582353 1131886 2157242 4029909 7377444 13236491
17 30 42 67 136 304 669 1412 2867 5630 10716 19773 35362 61312 103159 168678 268517 416942 632702 940023 1369740
20 33 64 123 216 340 475 590 708 1123 2940 9237 27363 73249 179212 407705 874984 1790953 3524796 6710763 12415070
17 26 48 95 183 337 606 1110 2150 4422 9388 19878 41058 82092 159377 303643 576544 1109743 2194981 4484682 9422430
15 30 55 90 140 229 420 841 1717 3408 6453 11620 19962 32879 52186 80187 119755 174418 248451 346974 476056
25 36 49 82 168 357 718 1341 2339 3850 6039 9100 13258 18771 25932 35071 46557 60800 78253 99414 124828
9 23 47 87 150 243 370 534 764 1212 2413 5880 15329 39043 94343 216253 475182 1014766 2134653 4470747 9379297
8 22 41 61 78 88 87 71 36 -22 -107 -223 -374 -564 -797 -1077 -1408 -1794 -2239 -2747 -3322
-3 -4 0 15 58 163 394 871 1820 3670 7239 14077 27067 51425 96287 177125 319295 563088 970730 1635859 2696096
22 29 32 31 26 17 4 -13 -34 -59 -88 -121 -158 -199 -244 -293 -346 -403 -464 -529 -598
-1 4 13 23 27 12 -35 -107 -138 64 938 3413 9431 23091 53108 117913 255750 543625 1130844 2294724 4526868
-7 0 32 115 286 593 1095 1862 2975 4526 6618 9365 12892 17335 22841 29568 37685 47372 58820 72231 87818
11 14 29 70 151 286 489 774 1155 1646 2261 3014 3919 4990 6241 7686 9339 11214 13325 15686 18311
8 6 4 2 0 -2 -4 -6 -8 -10 -12 -14 -16 -18 -20 -22 -24 -26 -28 -30 -32
3 -1 2 32 130 371 877 1830 3485 6183 10364 16580 25508 37963 54911 77482 106983 144911 192966 253064 327350
15 22 38 76 148 265 437 673 981 1368 1840 2402 3058 3811 4663 5615 6667 7818 9066 10408 11840
8 18 41 89 174 308 503 771 1124 1574 2133 2813 3626 4584 5699 6983 8448 10106 11969 14049 16358
20 22 32 76 193 439 901 1729 3206 5894 10917 20481 38820 73979 141382 271353 525379 1031339 2059025 4179887 8600866
8 -2 -16 -22 1 78 230 463 754 1034 1168 932 -13 -2150 -6138 -12847 -23396 -39194 -61984 -93890 -137467
17 24 29 35 45 62 89 129 185 260 357 479 629 810 1025 1277 1569 1904 2285 2715 3197
`

const calculateNextValue = (sequence) => {
  let sequences = [sequence]
  let differences = [];

  // Calculate differences
  for (let i = 1; i < sequence.length; i++) {
    differences.push(sequence[i] - sequence[i - 1]);
  }
  sequences.push(differences)

  // Repeat the process until the last difference is zero
  while (differences[differences.length - 1] !== 0) {
    let newDifferences = [];
    for (let i = 1; i < differences.length; i++) {
      newDifferences.push(differences[i] - differences[i - 1]);
    }
    sequences.push(newDifferences)

    if (newDifferences.every(diff => diff === 0)) {
      break
    }
    differences = newDifferences
  }
  console.log('sequences', sequences)

  const addedValue = sequences[sequences.length - 2][0]
  console.log('addedValue', addedValue)

  let value = 0
  const reversedSequences = sequences.reverse()
  for (const [seqIndex, seq] of reversedSequences.entries()) {
    if (seqIndex === reversedSequences.length - 1) {
      break
    }
    if (seqIndex === 0) {
      const nextDiff = reversedSequences[seqIndex + 1][0]
      const currentDiff = reversedSequences[seqIndex][0]
      value = nextDiff - currentDiff
    } else {
      const nextDiff = reversedSequences[seqIndex + 1][0]
      value = nextDiff - value
    }
  }

  console.log(value)

  return value
}

const getLineValue = (lines, lineIndex) => {
  let value = 0
  const line = lines[lineIndex]
  const matrix = line.split(' ').map(Number)
  console.log(matrix)
  value = calculateNextValue(matrix)
  console.log(value)

  return value
}

const run = () => {
  let sum = 0
  const lines = input2.trim().split('\n')

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    const lineValue = getLineValue(lines, lineIndex)
    sum = sum + lineValue
  }

  console.log(sum)
}
run()
