/* eslint-disable @next/next/no-img-element */
"use client";

interface BrawlerProps {
  brawler: {
    id: number;
    name: string;
    rank: number;
    trophies: number;
    highestTrophies: number;
    power: number;
    starPowers: string;
    gadgets: string;
    gears: string;
  };
}

export const Power = ({ brawler }: BrawlerProps) => {
  const portraits: { [key: string]: string } = {
    "BUZZ LIGHTYEAR":
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9VY0ZScUN6M1NEQXZmV1ZIOTJNUi5wbmcifQ:supercell:2zvB4PUFWzQ4-UG0anUV_8XqtUDCo4PbfQPi3pSjwj0?width=800",
    WILLOW:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9rMlU4aDFNbVBUZFFCd2RkTjVnSi5wbmcifQ:supercell:cEq7uIgnOyb_jMLwTMQfmcdEP9jWgPSTud2z6VYzho4?width=800",
    TICK: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC8xZmtxV2tVR1VubVBaaEozdjFYcC5wbmcifQ:supercell:fxHzZJPEEY67lpkgZzbCbCGNSY9qWB4YhOAgOsibnpw?width=800",
    TARA: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9QY29oNTFZaTVldE4xVm4xNmlMNS5wbmcifQ:supercell:_HdVva4dTn5fH6leRDgpKKArVkA2ML6HjK0Ww-Vu6tg?width=800",
    SURGE:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9kNGFKVjFMSjVySHozdTVZVk5aeS5wbmcifQ:supercell:t2zwX9ycy__zL4a8IHf0jWtWzGaRdreZNOw9KsOdiCI?width=800",
    STU: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9jcmRiRVU0Z2gxUWdyeDJkNldrUi5wbmcifQ:supercell:KQvyuW8Y3hgQg5HQc64PLcyS3_4k3Iq7MQh0egrjpKY?width=800",
    SQUEAK:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9yV245dENLdzlOUnNqWjJVUUQ4VS5wbmcifQ:supercell:gSq-rydifYaYK-mrBmn_CeRF5imxzV7AKgXZGf4j1G0?width=800",
    SPROUT:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9qVnhUUjhIR2dCdTY3YW95VldjSi5wbmcifQ:supercell:EuGV8i1I6B9gl3GQ270Us8Vyumt_nw69w4WxnoMK860?width=800",
    SPIKE:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9nNHpIeFlkTjc3MlU3N211RjNwZC5wbmcifQ:supercell:zI3fYcvmIop_gem0XHuxZPdUywPrRFbFdFPIt6PR5Y8?width=800",
    SANDY:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9BY29SMnVRYmtSRHpGTGpGZ1BYRy5wbmcifQ:supercell:s5X520h7PHxqYYFwjofMxFODB0Ifi__04-cR1N8gSAY?width=800",
    SAM: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9kemVpU1A3ZUdmYTIxNGhOaHNEMy5wbmcifQ:supercell:80k3Vz0zmSomMpWDEIdXiBhnHqc2AGBcm88wkgAXbss?width=800",
    RUFFS:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9BU1ZZM1Bubk1IOTR6S1Q3c2h3ei5wbmcifQ:supercell:tDhD4g4ThY837mxj-vm8j-QbtR5MesUN71pq8ETGop8?width=800",
    "R-T":
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9KWkFxQ2RjR2Myb3lvZU5CZm03ai5wbmcifQ:supercell:yZjgDTQIkTYCyG3nSiW6tqLwpEIeZfahAr6EFoU53hE?width=800",
    ROSA: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC96TFpVc0RZb2Uxd1Q5eEVucG5xTS5wbmcifQ:supercell:IodFWSWCdT5MBiXmunkUCDP_K28UK8rLIiE0VcwDqzs?width=800",
    RICO: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9aQm1URHBXd2ozeUhEWnpzRlY4dC5wbmcifQ:supercell:W5bl17Y_Ggm2hRy6HALyA9KnqJhJwKNFFc_EFTqcIT0?width=800",
    POCO: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9nc1NpU1JMaThlQkVvVFc3UUMxSC5wbmcifQ:supercell:9UWDdaUsJ062W3Q8Pl3C_SkUf_tWJExWAV-_jcUoZ-U?width=800",
    PIPER:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC82S1RVOHA3WGFMTVlvRU43QXI4Qi5wbmcifQ:supercell:cgIevjJdYr1jXh7iaKV-0P1_6C1UFN3X49Nz289d-8c?width=800",
    PENNY:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC91RXk5YkFWaWQ5ZzJRUVVVM0VkcS5wbmcifQ:supercell:xhhFJzjr_cIdxwkMqKLIlNti0eR9g6QYe6ba9UQo-Po?width=800",
    PEARL:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9nSnR3U0tmTVdUMVlOa000UjFmQi5wbmcifQ:supercell:ZPtYflL8KHA3i2WhGYVoeRC_Xh4MXjMzcpRDS4CqnvE?width=800",
    PAM: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9qNzMxNG8yQ2R1TkFWM0NHdDhuWS5wbmcifQ:supercell:VCrDt7yCg_J8ay0BRSJOT7htvYelgaKBek65o09jIsM?width=800",
    OTIS: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9XM3oyQzlxOG9xdkVUNHlBZmhzdC5wbmcifQ:supercell:ejlDwtYDcX-A9Cb0AnFcKsVRFPiCX6mhxkz0AF6p45Y?width=800",
    NITA: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9Ia1FEYzM0MVU2YWNEc2ptRGV5dy5wbmcifQ:supercell:iMrNNpgfUds_QNaSxgyx7TsBegUg-fuTnYQtobwNmRc?width=800",
    NANI: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9nUnY4eWtIVjRheW04M1U0OHB4TC5wbmcifQ:supercell:9X8RJVCajhr1fs7_sbVuSa1w_EQqa8W0FoOlbQQMO5Y?width=800",
    "MR. P":
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC81RDl0UEFBdmtTcVViUEwzR1k2aS5wbmcifQ:supercell:T_g-Wwg8nWAigmHHd5h2dtYbsxFLML7Bw2q3mGBh8cY?width=800",
    MORTIS:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9XS1podTNuUjNxYUFhQmltaHR6cC5wbmcifQ:supercell:6ei2KmTggv5Q_FVD-VNDyf-jqpmw40KRKxYH2co3ysg?width=800",
    MOE: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9IbWlHWkhCbVZ3WXlGNjI1cUZDbS5wbmcifQ:supercell:3q78C_lC8cWqSi9gAf4sKyQQ2squzwS2SvEEn7elQEg?width=800",
    MICO: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9LUENtOEVlU0QyNGRyeUNoc2FtYy5wbmcifQ:supercell:GPaGVabvb69dgHSyDh3oZRp8Y-B43c6IZeIvA_gDB64?width=800",
    MELODIE:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC90NGozVTFVTmNYU1NEeDVWRHFmeC5wbmcifQ:supercell:JiJY9DO4edVcsH6JRW4eYInkiZN14QROmVnUHKpmd1c?width=800",
    MEG: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9FQU45ckVyVlpYUlFSZ1NNYzJkVC5wbmcifQ:supercell:bXFsI_8iNdSTXgEnnc4NgDUwyRZz3Vb1jABlSnDtfqY?width=800",
    MAX: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9WN1UybWZKcVBITlA0NkZtektzNy5wbmcifQ:supercell:5bvFaqPn9MFxs6SfL8jdjnO3Erlj0V9NC_T8nvBxL_4?width=800",
    MANDY:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC81YkEyRmpwU21GVE1GdVlYc3E3bi5wbmcifQ:supercell:9Ui2gts2MXFyY3_pdg7RdAdquQlpxK_H1nIs2GAyY74?width=800",
    MAISIE:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9XUFJGbkYxS3dTWThya0s1RWFXUS5wbmcifQ:supercell:xUQ9Pgmw011CwZjH2SdjsIUH5GtNeXR_hWCR2EWZeGc?width=800",
    LOU: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9lM2I1R0t3c1VvbjVoRTQ2QkNxeC5wbmcifQ:supercell:STb7oYqKH_nirQMpig3Aa70XVQGk24o-5JpMZtDUaqY?width=800",
    LOLA: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC8zRDM1dkJWMVNkODY2ekc2ZktNby5wbmcifQ:supercell:yr5KCmuSGYblODu-RaVtR7DrvX2-o4Dzgiy4YHEcbUc?width=800",
    LILY: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9qakVad0FOREFwM2hUZjdLREFhTS5wbmcifQ:supercell:2yUFjYry1eP88L-fjjrlhDt09VpEhkjtvSZgYUWgK-s?width=800",
    LEON: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9NdWMyNzJUSnRKbm9RYm9Lc1pkWS5wbmcifQ:supercell:lgVsERY3IOK5LchqzCpaDQNDY73yDOUu6kXC_o5zKpM?width=800",
    "LARRY & LAWRIE":
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9NQndqb2llOU1wcGtLMUQ1YU5CZi5wbmcifQ:supercell:_kBlsLEHzHw6YnIQ-QKDAsoTGxz-1Lc0nsKEbc4XB8A?width=800",
    KIT: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9MejRzcDZGS1BiRjg2WG1LdVI1dy5wbmcifQ:supercell:LNbJQX9nF-x5-hJoYFmLSsMDy_2kn85o5XGnhxXLu6U?width=800",
    KENJI:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9lOVUxM2Fhc1lDcU55THBpVkxlei5wbmcifQ:supercell:B5n2MGEqSuKotgjgk0XxQHxaWkXR3bD08Q-Xi80VCBI?width=800",
    JESSIE:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9qdVFnWkNKbks0UmJKSGY3dWlCNi5wbmcifQ:supercell:_crk6CaY47ieFIaG8mm6Zz68solpXUQSCs6Cvfn8WZ4?width=800",
    JANET:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC84eXBzR2tvQ25YTDJrOXNVTDFZdy5wbmcifQ:supercell:34458GmHy7Ybi361z6e3kG62Wjy2fdZnS0rQ1Br3Hgo?width=800",
    JACKY:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9EVkVxNHBnNGlkVTFBdnl1NEFtcS5wbmcifQ:supercell:5nexHQ9NsxRSHpAegKiRAj-hIrO6SDZ_B9ews3BzD90?width=800",
    HANK: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9VaHVuZkUyM040REVyaGF4QW9KWi5wbmcifQ:supercell:V7jdalTYPd-OHj6OJgk8Nm7we0dMgKqNGrtP6GNi8BU?width=800",
    GUS: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9peHZKd3lIODU2TnQ4Z21nQ1lGTi5wbmcifQ:supercell:PJbIsaBs1rL64h5hTl_YLC4qGDqgybm6Erlwx790k54?width=800",
    GROM: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9Gd0wzQVlwN1N4UEo2YnY0WUZXTi5wbmcifQ:supercell:By0MOu-APaqz6vRIxzFz7LpWCV0nfS4MLoKhr0miiko?width=800",
    GRIFF:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9Qb203V3ZnOXJhbTZ6MjF6Y0dLYy5wbmcifQ:supercell:_JbBceRBY9dlrIML6AbTYEhuh6VYMvdbvn49yuE2mBI?width=800",
    GRAY: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC83ZlZwN2ZIVU56TEoxVk5QWmQ3TS5wbmcifQ:supercell:4_htGbMOJ1CvO6Jrb7JrBkAjMwF-HkO2cilZU_bvqQg?width=800",
    GENE: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9iWVRoY0EzcVRLbjdmekp5TDlmUC5wbmcifQ:supercell:hCkVpXmhygw9-QXp_B8VBmYT-AWtxUBgXpELucs3JK8?width=800",
    GALE: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC93WHAyYnF5NjNFWXpRTFZMdTZUSy5wbmcifQ:supercell:wAN7gn-3iNig1L4wNjaH8151SD8aS_F01X9OdRue-zQ?width=800",
    FRANK:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC85OGRpdGNoZXJvbUFkNTROM3E2NS5wbmcifQ:supercell:zNZvcF_72g3hSEjGAYlkpsIne3rd-mHWGl4i2kvs8wM?width=800",
    FANG: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9WNEpjbXRhWG1VNGJnMVprM3NVRS5wbmcifQ:supercell:EOcm8FqW1yrDjQ3lKBNcsN7VQdfUw-iPW1yzCDhAD4g?width=800",
    EVE: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9GcFN1VUJQZlU1NXNXV3VlcXBnVC5wbmcifQ:supercell:KKAH_tvDN_Lj8c6d-hJv1YcmTkWx-vA77-YAcfFyztM?width=800",
    EMZ: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9ZdGViWmJ0WTJyMXYxY2laUGpvYS5wbmcifQ:supercell:nkzyzNJ888X6GyEhrGfDuqtkH9Yy_BCBS4JFf_weoIQ?width=800",
    "EL PRIMO":
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC83ZGRlOEhKUmZCTXpHOUJDbmgxUC5wbmcifQ:supercell:0tIt76tdaW0HA36hJBQeeQqOKskiAU3nH629eQPse9A?width=800",
    EDGAR: "https://moegirl.uk/images/b/b4/Edgar_Portrait.png",
    DYNAMIKE:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9vM3JORDJEb1l1cWJBeWp4ZkNiTS5wbmcifQ:supercell:0NirzBAzbYFvus7Hde47zsXtxGjCDrzu0Cgp_W0RPoU?width=800",
    DRACO:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9VaksycmdOeXI0UWM2TkJOaFR2Qy5wbmcifQ:supercell:nLQKFbmKoHnEyGFOXKg1ZKEA1GZLiQLpCp66tOsVtqc?width=800",
    DOUG: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9hV0RWQW5DSldFRjRyZzhyYWg4ci5wbmcifQ:supercell:kl7JBrvD3DGyfVl8AZU4YErUANyDWwoYc_3B3BXsxn0?width=800",
    DARRYL:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9wYXVoR2NHQ3cxaXhHbWRMUEZtTi5wbmcifQ:supercell:e7sc3mGHJLrWaIsq6e1PUxzmWkbufXv7p6ym9lciZOE?width=800",
    CROW: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC95Q3ZOYlhKNWdpNzh3ZWVkWUx0bi5wbmcifQ:supercell:zCm4CBYdxdF6tlhHlb2uDwsYzNLdPy0R6OENCqXv3L4?width=800",
    CORDELIUS:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9QNWRqUmFtekhHc1A2djVKeFpKSy5wbmcifQ:supercell:mN9qGG2pbI4sMFDJjq0EQSE1n9ustdZCU0aypU_xcow?width=800",
    COLETTE:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC96TlFUc2s1amtKYThkYVBacGpGRy5wbmcifQ:supercell:aMdsVrKNNl7AKN_1tZglw95vpWnLdxOlnSMy0h1EsfQ?width=800",
    CLANCY:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC81clh2cERrZUM0aEhYMUNjU3FVMS5wbmcifQ:supercell:SAA9NG_-TrxHFxwVFLc63BpZiq69gfSFdLENovqiw3Q?width=800",
    CHUCK:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9qeXZza054NW9xMXdHaGNMNUdpZC5wbmcifQ:supercell:-1x-nlKHdBLY6al7gyXU5Tj_xFZsmlExkDOR5_mZKrc?width=800",
    CHESTER:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9RN0hkN25adnppRDVKOVlIeTJ0cC5wbmcifQ:supercell:zUzC4WzvlE-Y5TVFPQotkHciMoGt_I6gcjgjgBb3Ixo?width=800",
    CHARLIE:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9IQ1ZNeUFkN1RzVnVOeXNmN2tiay5wbmcifQ:supercell:dj-_mElwXbiFT8kqINapZ0v7hVjzuo1SSS3bcVmq4LA?width=800",
    CARL: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9GZTlYWGNDbUNLWmZiWjU0YjMxeC5wbmcifQ:supercell:1VUbYOV1lvIJ0qHumpOYM-UY8BVbMJo5PCyHfXhOaBM?width=800",
    BYRON:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC80dmdGOGZBNGJNd0UzaFBoRkxaaS5wbmcifQ:supercell:g83RzaGGcvik5roIIV1HupoMEUPaXNdRb2OAnfaYOB0?width=800",
    BUZZ: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9Fa3VXa1czeXA1Q0VKY29DOGZpOS5wbmcifQ:supercell:sWnfqYvl-U-3eAOy1bFRxTJV2F4i6zpLzydk6VU456g?width=800",
    BUSTER:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC90RWZxVmZpeExDdEhNMkZ1RlBlWi5wbmcifQ:supercell:XbDe90WnpdxNCxAwWn2ZGo7x31k6T2SsKQcUEyKqiQA?width=800",
    BROCK:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9QOTFhcjJxWVVMNFVQN2U2Szd5NS5wbmcifQ:supercell:32GyCBN5DtexsSu1ij5nG8ABb7G5UJmHrfSJQV1dvLs?width=800",
    BONNIE:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9jeGg0QXk5c3g3WmlhV244N3lrdC5wbmcifQ:supercell:tRB3R9Gsu8mM_eIDdvJdQkQYqNIhfh6G5cfKpuJAU54?width=800",
    BO: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9lckx4M2ZGUDF5UWRwbjJITHZ3NC5wbmcifQ:supercell:olJnUQoMHJ3SGkpUIESo2BZeRXzy78REDrkQ7sypCmo?width=800",
    BIBI: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9oN25QRHJmZ1dOVVNtRlJDWk5leS5wbmcifQ:supercell:RUeAuYfzU8MnKWECtNUfKM2V6odLVLJ_p_icetq2CCA?width=800",
    BERRY:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9GZGk2QUZ5bVMzMTFRaGhROVFjUC5wbmcifQ:supercell:ruq5DneoEM8xHlfIjm1Bk8VFIjbSbFV6U28ae76KlVY?width=800",
    BELLE:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC85Z0NKM0Vxa2FZMXdNVmdueTZkSi5wbmcifQ:supercell:WAh1ZuUuv4LXKaLcoxXjVWp1eva4OZbO06J7fCKApqw?width=800",
    BEA: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC81dkJ5TEdIUjhSdFZoOWNvRGl5WS5wbmcifQ:supercell:pZkwe5JUpR5_8RgleecvKJu7iZy_CeAfYWMRnXPwkdA?width=800",
    BARLEY:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC81S2hkd2dLY2ttUzFnUDY4VjFkQi5wbmcifQ:supercell:RY2C9j91ImuWF_nmgNTz7dNCkVvwwjYmizy3Ch4kwWY?width=800",
    ASH: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC96aDFhSDdwTWprVXhwZExpUm84OS5wbmcifQ:supercell:tIqmsnUXH5onvx6uZYSb14xDQAzJTiBt50LwWspQeyk?width=800",
    ANGELO:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9nYWNpRFNITUY4MTltRWRldzVBMS5wbmcifQ:supercell:MzEbcQY8hODw-UGRdqUR9L-ieDHlPwkdrYvuwystDnI?width=800",
    AMBER:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9UdDdTcFNHUnRVaEc4ZmlQd2txYy5wbmcifQ:supercell:fs6YCDgHD2XskCxwcVn-ropUmnq3UwEeYqYGVL1DjCc?width=800",
    SHELLY:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9YNk14UEFmOHpQcG5YdDZVd0oybS5wbmcifQ:supercell:F0FN7C_y_jY00qq08dr8WWuA9YvSWxio4CpdqxMSKa0?width=2400",
    "8-BIT":
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9oY1FxR1ZqQzJ5S0Zkck4ycnBuSi5wbmcifQ:supercell:hE7YlPKUXYRAVmniZHbqB0BPjRkLM0op1HACKwChxVk?width=800",
    COLT: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9BNXhNNEFCQWZSR0s0V3hGVkp0NC5wbmcifQ:supercell:A4USei_kiRRYMkx8LjgDU3vd1TSTm0Ai4mB9UMkxQiE?width=800",
    JUJU: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9jNm1CTVFjb3JIWWRDZEpBTmlnVi5wbmcifQ:supercell:gYw-WV_CM4V9aUO8P0Qn5blXpoEfUjt4N8aPaVcXgec?width=800",
    SHADE:
      "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9DRE1Fc21icFV1bmVhcGNEeVQ0OS5wbmcifQ:supercell:2z1Aj8Moy27wQ3BHcAUcP8GO0wVmtX2F_FTXfpuIGu4?width=800",
    BULL: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC9hTUZWRmtFREVjVXNmdWhwYmp6ei5wbmcifQ:supercell:8ngylr_w52FzKuBZBbAIUPeyxwZmkJuVhOTy8Tl0d68?width=800",
  };

  const portrait = portraits[brawler.name] || "";

  return (
    <li className="group flex flex-col justify-center duration-100 m-1 lg:m-2.5 border-indigo-300 border-opacity-40 hover:border-opacity-100 border rounded-r rounded-t lg:scale-125">
      <div className="flex">
        <div className="flex items-center bg-gray-950 rounded-t w-full w-max-[10px]">
          <img
            className="w-3 pointer-events-none ml-[1px]"
            src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoic3VwZXJjZWxsXC9maWxlXC8zZXd0TE5CbXpFOGNQZDh0cWR5Yi5wbmcifQ:supercell:unOAfLy4ysGfexi4hOTKtRf_4P9yAAoANGg-tjbLwVQ?width=800"
          />
          <p className="text-[11px]">{brawler.power}</p>
        </div>
      </div>
      <div
        className={`
        w-12 flex relative z-10 bg-gradient-to-b from-inherit to-indigo-950 group-hover:to-violet-800 rounded-b `}
      >
        <img
          src={portrait}
          className="h-6 w-max text-[6px]"
          alt={`${brawler.name}`}
        />
      </div>
    </li>
  );
};
