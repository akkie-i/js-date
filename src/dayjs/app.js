const todayDefault = document.getElementById("today-default");
const todayFromDate = document.getElementById("today-from-date");
const todayFromUnix = document.getElementById("today-from-unix");

todayDefault.innerHTML = dayjs().format();
todayFromDate.innerHTML = dayjs(new Date()).format();
todayFromUnix.innerHTML = dayjs(new Date().getTime()).format();

const YYYY_MM_DD = document.getElementById("specify-YYYY-MM-DD");
const YYYY_M_D_HH_mm_ss = document.getElementById("specify-YYYY-M-D-HH-mm-ss");
const YYYYMMDDHHmmss = document.getElementById("specify-YYYYMMDDHHmmss");
const unixTimeStamp = document.getElementById("specify-unix-timestamp");

YYYY_MM_DD.innerHTML = dayjs("2020-01-01").format();
YYYY_M_D_HH_mm_ss.innerHTML = dayjs("2020/1/1 00:00:00").format();
YYYYMMDDHHmmss.innerHTML = dayjs("20200101000000").format();
unixTimeStamp.innerHTML = dayjs(1577804400000).format();

dayjs.locale("ja");
const week_ja_d = document.getElementById("week-ja-d");
week_ja_d.innerHTML =
  dayjs().format("d") +
  " // { 0: '日', 1: '月', 2: '火', 3: '水', 4: '木', 5: '金', 6: '土' }";

const week_ja_ddd = document.getElementById("week-ja-ddd");
week_ja_ddd.innerHTML = "locale=ja: " + dayjs().format("ddd");

const week_ja_dddd = document.getElementById("week-ja-dddd");
week_ja_dddd.innerHTML = "locale=ja: " + dayjs().format("dddd");

dayjs.locale("en");
const week_en_ddd = document.getElementById("week-en-ddd");
week_en_ddd.innerHTML = "locale=en: " + dayjs().format("ddd");

const week_en_dddd = document.getElementById("week-en-dddd");
week_en_dddd.innerHTML = "locale=en: " + dayjs().format("dddd");

const d = dayjs();

const parseYear_yy = document.getElementById("parse-year-yy");
parseYear_yy.innerHTML = dayjs().format("YY");

const parseYear_yyyy = document.getElementById("parse-year-yyyy");
parseYear_yyyy.innerHTML = dayjs().format("YYYY");

const parseMonth_m = document.getElementById("parse-month-m");
parseMonth_m.innerHTML = dayjs().format("M");

const parseMonth_mm = document.getElementById("parse-month-mm");
parseMonth_mm.innerHTML = dayjs().format("MM");

const parseMonth_mmm = document.getElementById("parse-month-mmm");
parseMonth_mmm.innerHTML = "locale=en: " + dayjs().format("MMM");

const parseMonth_mmmm = document.getElementById("parse-month-mmmm");
parseMonth_mmmm.innerHTML = "locale=en: " + dayjs().format("MMMM");

dayjs.locale("ja");
const parseMonth_mmm_ja = document.getElementById("parse-month-mmm-ja");
parseMonth_mmm_ja.innerHTML = "locale=ja: " + dayjs().format("MMM");

const parseMonth_mmmm_ja = document.getElementById("parse-month-mmmm-ja");
parseMonth_mmmm_ja.innerHTML = "locale=ja: " + dayjs().format("MMMM");

dayjs.locale("en");

const parseDate_d = document.getElementById("parse-date-d");
parseDate_d.innerHTML = dayjs().format("D");

const parseDate_dd = document.getElementById("parse-date-dd");
parseDate_dd.innerHTML = dayjs().format("DD");

const parseHour_H = document.getElementById("parse-hour-H");
parseHour_H.innerHTML = dayjs().format("H");

const parseHour_HH = document.getElementById("parse-hour-HH");
parseHour_HH.innerHTML = dayjs().format("HH");

const parseHour_h = document.getElementById("parse-hour-h");
parseHour_h.innerHTML = dayjs().format("h");

const parseHour_hh = document.getElementById("parse-hour-hh");
parseHour_hh.innerHTML = dayjs().format("hh");

const parseMinute_m = document.getElementById("parse-minute-m");
parseMinute_m.innerHTML = dayjs().format("m");

const parseMinute_mm = document.getElementById("parse-minute-mm");
parseMinute_mm.innerHTML = dayjs().format("mm");

const parseSecond_s = document.getElementById("parse-second-s");
parseSecond_s.innerHTML = dayjs().format("s");

const parseSecond_ss = document.getElementById("parse-second-ss");
parseSecond_ss.innerHTML = dayjs().format("ss");

const parseMillisecond = document.getElementById("parse-millisecond");
parseMillisecond.innerHTML = dayjs().format("SSS");

const tomorrow = document.getElementById("tomorrow");
tomorrow.innerHTML = dayjs().add(1, "d").startOf("day").format();

const yesterday = document.getElementById("yesterday");
yesterday.innerHTML = dayjs().subtract(1, "d").endOf("day").format();

const endOfMonth = document.getElementById("end-of-month");
endOfMonth.innerHTML = dayjs().endOf("month").format();

const startOfMonth = document.getElementById("start-of-month");
startOfMonth.innerHTML = dayjs().startOf("month").format();

const endOfWeek = document.getElementById("end-of-week");
endOfWeek.innerHTML = dayjs().endOf("week").format();

const startOfWeek = document.getElementById("start-of-week");
startOfWeek.innerHTML = dayjs().startOf("week").format();

const lastMonth = document.getElementById("last-month");
lastMonth.innerHTML = dayjs("2020-03-31").subtract(1, "M").format();

const nextMonth = document.getElementById("next-month");
nextMonth.innerHTML = dayjs("2020-10-31").add(1, "M").format();

dayjs.extend(dayjs_plugin_isSameOrBefore);

const compare1 = document.getElementById("compare-1");
compare1.innerHTML = dayjs("2020-01-01").isSameOrBefore(dayjs("2020-01-02"));

const compare2 = document.getElementById("compare-2");
compare2.innerHTML = dayjs("2020-01-01 00:00:00").isSameOrBefore(
  dayjs("2020-01-01 00:00:01")
);

const compare3 = document.getElementById("compare-3");
compare3.innerHTML = dayjs("2020-01-01 00:00:00").isSameOrBefore(
  dayjs("2020-01-01 00:00:00")
);

const from = dayjs("2020-01-05 05:30:30");
const to = dayjs("2020-01-01 00:00:00");

const diff1 = document.getElementById("diff-1");
diff1.innerHTML = from.diff(to);

const diff2 = document.getElementById("diff-2");
diff2.innerHTML = from.diff(to, "month");

const diff3 = document.getElementById("diff-3");
diff3.innerHTML = from.diff(to, "day");

const diff4 = document.getElementById("diff-4");
diff4.innerHTML = from.diff(to, "hour");

const diff5 = document.getElementById("diff-5");
diff5.innerHTML = from.diff(from.diff(to, "month", true));

const diff6 = document.getElementById("diff-6");
diff6.innerHTML = from.diff(to, "day", true);

const diff7 = document.getElementById("diff-7");
diff7.innerHTML = from.diff(to, "hour", true);

const format_YYYYMMDD = document.getElementById("format-YYYYMMDD");
format_YYYYMMDD.innerHTML = dayjs().format("YYYYMMDD");

const format_YYYY_MM_DD = document.getElementById("format-YYYY_MM_DD");
format_YYYY_MM_DD.innerHTML = dayjs().format("YYYY/MM/DD");

const format_YYYY_MM_DD_HH_mm_ss = document.getElementById(
  "format-YYYY-MM-DD-HH-mm-ss"
);
format_YYYY_MM_DD_HH_mm_ss.innerHTML = dayjs().format("YYYY-MM-DD HH:mm:ss");

const format_MM_DD = document.getElementById("format-MM-DD");
format_MM_DD.innerHTML = dayjs().format("MM-DD");

const format_HH_mm_ss_SSS = document.getElementById("format-HH-mm-ss-SSS");
format_HH_mm_ss_SSS.innerHTML = dayjs().format("HH:mm:ss.SSS");

dayjs.locale("ja");
const format_YYYY_MM_DD_ja_day = document.getElementById(
  "format-YYYY-MM-DD-ja-day"
);
format_YYYY_MM_DD_ja_day.innerHTML = dayjs().format("YYYY年MM月DD日(ddd)");

dayjs.locale("en");
const format_YYYY_MM_DD_en_day = document.getElementById(
  "format-YYYY-MM-DD-en-day"
);
format_YYYY_MM_DD_en_day.innerHTML = dayjs().format("YYYY/MM/DD (ddd)");

const unixOk = document.getElementById("unix-ok");
unixOk.innerHTML = dayjs(1577804400000).format();

const unixDelimiter10Ng = document.getElementById("unix-delimiter-10-ng");
unixDelimiter10Ng.innerHTML = dayjs(1577804400).format();

const unixDelimiter10Ok = document.getElementById("unix-delimiter-10-ok");
unixDelimiter10Ok.innerHTML = dayjs(1577804400 * 1000).format();

const unix = document.getElementById("unix");
unix.innerHTML = dayjs(1577804400000).unix();

const unixValueOf = document.getElementById("unix-value-of");
unixValueOf.innerHTML = dayjs(1577804400000).valueOf();
