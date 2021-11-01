Object.defineProperty(exports, "__esModule", { value: true });

const nativeMarketsV3 = {
    "POLIS": "HxFLKUAmAMLz1jtT3hbvCMELwH5H9tpM2QugP8sKyfhW",
  "ATLAS": "Di66GTLsV64JgCCYGVcY21RZ173BHkjJVgPyezNN7P1K",
  "POLIS/ATLAS": "6fk7SnxrF69fPkfMNnkjPXbxsqd8xzDfNpGWbtcdfhFX",
  "PASS": "7bPXjodb2c4ZfBPL9QxyFF2JbErB67Rdbpd41ChpDSof",
  "DOI": "AYXTVttPfhYmn3jryX5XbRjwPK2m9445mbN2iLyRD6nq",
  "HOSA": "5Erzgrw9pTjNWLeqHp2sChJq7smB7WXRQYw9wvkvA59t",
  "TCW": "DXPv2ZyMD6Y2mDenqYkAhkvGSjNahkuMkm4zv6DqB7RF",
  "LOST": "73d9N7BbWVKBG6A2xwwwEHcxzPB26YzbMnRjue3DPzqs",
  "LOVE": "AM9sNDh48N2qhYSgpA58m9dHvrMoQongtyYu2u2XoYTc",
  "MRDR": "BJiV2gCLwMvj2c1CbhnMjjy68RjqoMzYT8brDrpVyceA",
  "PFP": "7JzaEAuVfjkrZyMwJgZF5aQkiEyVyCaTWA3N1fQK7Y6V",
  "AVE": "8yQzsbraXJFoPG5PdX73B8EVYFuPR9aC2axAqWearGKu",
  "TLS": "AVHndcEDUjP9Liz5dfcvAPAMffADXG6KMPn8sWB1XhFQ",
  "SPT": "FZ9xhZbkt9bKKVpWmFxRhEJyzgxqU5w5xu3mXcF6Eppe",
  "PBA": "4jN1R453Acv9egnr7Dry3x9Xe3jqh1tqz5RokniaeVhy",
  "UWB": "J99HsFQEWKR3UiFQpKTnF11iaNiR1enf2LxHfgsbVc59",
  "OMPH": "HdvXMScwAQQh9pEvLZjuaaeJcLTmixxYoMFefeqHFn2E",
  "STAR": "G919S8193DGxgt133dkwiMnEbd7AK5MnjTjfaiZLM9HS",
  "ASF": "3J73XDv9QUsXJdWKD8J6YFk4XxPNx5hijqjyxdNJqaG9",
  "PX4": "MTc1macY8G2v1MubFxDp4W8cooaSBUZvc2KqaCNwhQE",
  "PX4SNB": "5YHdWMXtAvEuUDZgsXNxvHAAKwuNu9Dq4DDWU8268qqr",
  "STAKE1": "A4MZ55qsrBTerqWHMa5o36RpAXycNnoZKbQ4y1fkg3SA",
  "MSPP1": "G4E59tNgqkPYWWebTKoDFEpwwtrvG7MFdLku3XX4SvB9",
  "MSD1": "ErFFAyjV9iHAVJcA9AeBHAZrHNNJnjWDiZR4LvvkfACK",
  "OSTD1": "3BS6iuWRYW1HCHZP1ftcur1TLNiEEhfhxXkmYpn816W4",
  "BGAT": "8vycGWEqhvnTJR4aTcN2TvtUUNtLXoCTrpCGtoD8R4bo",
  "PX5": "3ySaxSspDCsEM53zRTfpyr9s9yfq9yNpZFXSEbvbadLf",
  "PX5SSP": "3u7Lm2uwxS8Prfd1HfZShpoYhCxXJZLi8YXem4b6FZFQ",
  "TIGU": "yWNmeZVXg7My9PMdZGiSx7jsKYkkeCiqHeQbD7zdJeq",
  "TIGUSS": "3rZ9g6JC47U6aLMWEUhEAkSf7Kqt11FkPXvWM2ssLgM9",
  "TIGUEA": "6U9c1n2GU7tRr8Bs7vcXoXACmmEQ87X6To3ie5H6rKyB",
  "STAKE2": "4m18ExgKckX8eVty96yX7rfUtXs8AZN31iM6mVKDRdBp",
  "BGPR": "6B7idqUbnCaUMdvzPdQkHpBR287xPk46q3afYMxvsa6M",
  "OPALJJ": "2W6ff8LajAwekXVxDARGQ9QFNcRbxmJPE2p3eNsGR7Qu",
  "OJJSBB": "8YX24DNagnSHqFkTbts8NihegSceo3qZaeEWWTgJeDSa",
  "CONSO": "BA1XAKTYjMJBzYbB1usSZXesj9FudygvJ4wSWSFMK6xV",
  "CONCC": "5ovwY44rgJm1vYNmgAGnEjszhoULJqbCVrFiSS2a3T4c",
  "CEMOP": "GSzxxsnVeTGmCLJ84y2dQeBoBVW1Su8bTqR7bJyDxjxn",
  "STAKE3": "AwmsP69aHDU9ZqUhX98xo9oX1GWCyoNaDmrSCqyZd98k",
  "VIP": "CFJFbG6dWnh9Skr1UtH3UrqDRfngRDJQ4iBMuYsV2rp7",
  "BGOF": "3Dv3VmbzngyedBXcSgjxCVLS7w9giWHLzmCBmP2bQD6j",
  "VZUSOP": "AT1AoPoFU8WZkW8AnpQsSpUDaRyymvLPvG7k2kGZSwZr",
  "VOPSUS": "3oK293Mgd6tbqXgUZp4tw48h9DHrxH5pig1MPLK73iLL",
  "VOPESQ": "CGuJJJp4UbBrph6EDoWgAKcP6J8ZfWJ28r72uoj9WBqU",
  "CORUS": "Cgk6aeUfK78maSWdFLxdEW8BEsyGcvdLz7Cue6SjUk8J",
  "STAKE4": "Gu9ZNcmd6wTKuLh88dVM64WZ3EZT5T6DfbUvu1hpc8Ju",
  "BGSUP": "DBtN3BJJc5TDs4psnnoiRV5LL8Kk4YM2xdZ6M3VzBH4V",
  "FBLBPL": "BeqGJwPnRb3fJwhSrfhzgUYKqegUtGtvXajTYzEpgGYr",
  "FBPLSL": "5KcER4cXLToXSYMoykdXiGwXg97Hjs7FErKaoDYKq4y8",
  "FBPLER": "Dauk5SEHR8sx3FNmgZVBUaAV7heWAujkxMbGSZkQXs1n",
  "OGKATP": "2qU6MtkBS4NQhzx7FQyxS7qfsjU3ZdbLVyUFjea3KBV2",
  "OTSS": "Ac8niMjqfCWruVF493iW1LeFzyDMGCrdDrC64iLL4ecC",
  "STAKE5": "4AhBa7rJg1ryedTYyKdRmaFZMkotSEbjENRnAtBuaA3k",
  "MPAS": "6unizr2gWwNVZgzSTCmD9ih6QBScGm9dkG1dy7oWTweb",
  "BGCPN": "uSnksnhQim5QN49PkpRHjSZmcbjHSJ1WiQHD7SJ6cWc",
  "CALG": "4TpCAobnJfGFRbZ8gAppS9aZBwEGG1k9tRVmx6FPUvUp",
  "CALGBS": "4RHxqBc76NAQxcT8DQJZN9i9s1BeRWGiKviHyWgsj8EV",
  "CALGEI": "6kqfE89LpaPn25zMxxz83bWZK59BGzH9DJsDw2GZyxue",
  "CALCH": "6ybME9qMbXgLs3PLWvEv8uyL2LWnUZUz7CYGE4m8kEFm",
  "CCHSB": "9ZjTVYfw8ock5QZAiCwp13pz9ZPLRa7DtA29sJU9FQoH",
  "CMPAS": "4Gg2WPaYbZNpy86tMhmw6w4CsiVupnNXwvbsLREMB5UQ",
  "BGEXE": "Fn5uYTGamghYcQfch6UbcSpj7VeMZukWmbLVNePnknvf",
  "OPALJ": "2z52mwzBPqA2jGf8jJhCQijHTJ1EUEscX5Mz718SBvmM",
  "OJSW": "BdivWfkYfE9XPVzpeeYZ6xZqv5p6jiYym5mU22Rfscd5",
  "PCHAUP": "GJtKxACMhWM9hNeX56RwNyCbE9Bet9zkRHDoLicLK9VK",
  "COVAS": "6Y4bSkNwcugHzDc8eDSqDL9m15mQi9Mc8UncxVm5YZRX",
  "CHMVOS": "GxJDcyN83nWmcsC5arPpsuB8NEts1n6zK6FTDtDw29z",
  "BGUNQ": "3X7koctR3jYVh4XV9QKNtbT9gkqsGWMSpwHs6nHtd9sR",
  "PX5SR": "9etn4jMzfyBBZCEMdAQqd1Mop19aopJyBhMnaSG5NazZ",
  "FM-PP": "7sEn3AMv5oHmbdXDXVfTTEthWEYdiaDWGAvkKcoygN7U",
  "FM-T3ANI": "EJ8MX3M4xsgAn8uZkLNyp76zAqn9uY18NtitASoYoRyS",
  "FM-T3FTX": "45SyRzGWW2cr3Y3637xzRh3Hr4KciMheQUpRphkcLoAX",
  "FM-T3SR": "ErC5ux4t4UA437h22GpYMEZEDjAUvx2m6aQJ4Fzjcc5n",
  "FM-NLDB": "7PFvfkQip26mzD5gvipjNLqpyzFyR8qvrndF7u1jFfaq",
  "FM-CO92": "52HCo9MRuEj6sKRS9Me2UriCQvaeL4CQe7DkBSm1bW7K",
  "FM-T3CK": "HSJ8Jv8MsxxQrdspBtT4tQvTrerAynmCxSokBK7YC9UR",
  "FM-T3RAY": "3KYW1LYzfZfBupRcuS7KjH84jCWdX1s42xvvDF3keGn2",
  "FM-T3ATL": "C5UdbBXYyeDFPcNjw9zQkcWadzP6tgKoCp7YxhqGcJp1",
  "FM-T3SOL": "98238GZrjECJDpowVCn1EaYtJpR7o5HMszevTFD7brEp",
  "FM-T3STEP": "GCsYJjV1BYtiaGyjFgkadutaNKYYDPDP8anP95h2tbTc",
  "FM-T3PH": "CL5ScWqMDcy1dvvPXE4XAcBdTYDc8x8F8www29K2xNeA",
  "FM-PLG": "FbxKfbcKaMkHhzP69kUYRYDLHqppgiGEWhxb5bbFQX8z",
  "FM-T3FAB": "99g7oerCB6QUP8BKhuKZP3T4RnacUV3Tkbs1f4Q3i3Av",
  "PF4": "CWn74XJsh98zWVYWtzqn1dGuz96KFxb18pYQQfECuCzA",
  "FBLEGR": "9VvHp11hiCPQT2GMMVvmyWPTEzJ1Ey3kqAGA5VsxQwjB",
  "CMHMSB": "4WckBAhK5YK78sZaYgiLAYZYgyhNkMN1JXkjRwWuyAg6",
  "CMHFAT": "5QsRgRyvrhvePAtwBMZNPSmVwZR5vKkga3n31HxS4P3L"
};

exports.nativeMarketsV3 = nativeMarketsV3