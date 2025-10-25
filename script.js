const currencyData = {
  USD: { name: "United States Dollar", flag: "https://flagcdn.com/us.svg", symbol: "$" },
  EUR: { name: "Euro", flag: "https://flagcdn.com/eu.svg", symbol: "€" },
  GBP: { name: "British Pound Sterling", flag: "https://flagcdn.com/gb.svg", symbol: "£" },
  JPY: { name: "Japanese Yen", flag: "https://flagcdn.com/jp.svg", symbol: "¥" },
  AUD: { name: "Australian Dollar", flag: "https://flagcdn.com/au.svg", symbol: "A$" },
  CAD: { name: "Canadian Dollar", flag: "https://flagcdn.com/ca.svg", symbol: "C$" },
  CHF: { name: "Swiss Franc", flag: "https://flagcdn.com/ch.svg", symbol: "CHF" },
  CNY: { name: "Chinese Yuan", flag: "https://flagcdn.com/cn.svg", symbol: "¥" },
  SEK: { name: "Swedish Krona", flag: "https://flagcdn.com/se.svg", symbol: "kr" },
  NZD: { name: "New Zealand Dollar", flag: "https://flagcdn.com/nz.svg", symbol: "NZ$" },
  MXN: { name: "Mexican Peso", flag: "https://flagcdn.com/mx.svg", symbol: "$" },
  SGD: { name: "Singapore Dollar", flag: "https://flagcdn.com/sg.svg", symbol: "S$" },
  HKD: { name: "Hong Kong Dollar", flag: "https://flagcdn.com/hk.svg", symbol: "HK$" },
  NOK: { name: "Norwegian Krone", flag: "https://flagcdn.com/no.svg", symbol: "kr" },
  KRW: { name: "South Korean Won", flag: "https://flagcdn.com/kr.svg", symbol: "₩" },
  TRY: { name: "Turkish Lira", flag: "https://flagcdn.com/tr.svg", symbol: "₺" },
  INR: { name: "Indian Rupee", flag: "https://flagcdn.com/in.svg", symbol: "₹" },
  RUB: { name: "Russian Ruble", flag: "https://flagcdn.com/ru.svg", symbol: "₽" },
  BRL: { name: "Brazilian Real", flag: "https://flagcdn.com/br.svg", symbol: "R$" },
  ZAR: { name: "South African Rand", flag: "https://flagcdn.com/za.svg", symbol: "R" },
  AED: { name: "United Arab Emirates Dirham", flag: "https://flagcdn.com/ae.svg", symbol: "د.إ" },
  AFN: { name: "Afghan Afghani", flag: "https://flagcdn.com/af.svg", symbol: "؋" },
  ALL: { name: "Albanian Lek", flag: "https://flagcdn.com/al.svg", symbol: "L" },
  AMD: { name: "Armenian Dram", flag: "https://flagcdn.com/am.svg", symbol: "֏" },
  ANG: { name: "Netherlands Antillean Guilder", flag: "https://flagcdn.com/an.svg", symbol: "ƒ" },
  AOA: { name: "Angolan Kwanza", flag: "https://flagcdn.com/ao.svg", symbol: "Kz" },
  ARS: { name: "Argentine Peso", flag: "https://flagcdn.com/ar.svg", symbol: "$" },
  AWG: { name: "Aruban Florin", flag: "https://flagcdn.com/aw.svg", symbol: "ƒ" },
  AZN: { name: "Azerbaijani Manat", flag: "https://flagcdn.com/az.svg", symbol: "₼" },
  BAM: { name: "Bosnia-Herzegovina Convertible Mark", flag: "https://flagcdn.com/ba.svg", symbol: "KM" },
  BBD: { name: "Barbadian Dollar", flag: "https://flagcdn.com/bb.svg", symbol: "$" },
  BDT: { name: "Bangladeshi Taka", flag: "https://flagcdn.com/bd.svg", symbol: "৳" },
  BGN: { name: "Bulgarian Lev", flag: "https://flagcdn.com/bg.svg", symbol: "лв" },
  BHD: { name: "Bahraini Dinar", flag: "https://flagcdn.com/bh.svg", symbol: ".د.ب" },
  BIF: { name: "Burundian Franc", flag: "https://flagcdn.com/bi.svg", symbol: "FBu" },
  BMD: { name: "Bermudian Dollar", flag: "https://flagcdn.com/bm.svg", symbol: "$" },
  BND: { name: "Brunei Dollar", flag: "https://flagcdn.com/bn.svg", symbol: "$" },
  BOB: { name: "Bolivian Boliviano", flag: "https://flagcdn.com/bo.svg", symbol: "Bs." },
  BSD: { name: "Bahamian Dollar", flag: "https://flagcdn.com/bs.svg", symbol: "$" },
  BTN: { name: "Bhutanese Ngultrum", flag: "https://flagcdn.com/bt.svg", symbol: "Nu." },
  BWP: { name: "Botswanan Pula", flag: "https://flagcdn.com/bw.svg", symbol: "P" },
  BYN: { name: "Belarusian Ruble", flag: "https://flagcdn.com/by.svg", symbol: "Br" },
  BZD: { name: "Belize Dollar", flag: "https://flagcdn.com/bz.svg", symbol: "$" },
  CDF: { name: "Congolese Franc", flag: "https://flagcdn.com/cd.svg", symbol: "FC" },
  CLP: { name: "Chilean Peso", flag: "https://flagcdn.com/cl.svg", symbol: "$" },
  COP: { name: "Colombian Peso", flag: "https://flagcdn.com/co.svg", symbol: "$" },
  CRC: { name: "Costa Rican Colón", flag: "https://flagcdn.com/cr.svg", symbol: "₡" },
  CUP: { name: "Cuban Peso", flag: "https://flagcdn.com/cu.svg", symbol: "$" },
  CVE: { name: "Cape Verdean Escudo", flag: "https://flagcdn.com/cv.svg", symbol: "$" },
  CZK: { name: "Czech Koruna", flag: "https://flagcdn.com/cz.svg", symbol: "Kč" },
  DJF: { name: "Djiboutian Franc", flag: "https://flagcdn.com/dj.svg", symbol: "Fdj" },
  DKK: { name: "Danish Krone", flag: "https://flagcdn.com/dk.svg", symbol: "kr" },
  DOP: { name: "Dominican Peso", flag: "https://flagcdn.com/do.svg", symbol: "$" },
  DZD: { name: "Algerian Dinar", flag: "https://flagcdn.com/dz.svg", symbol: "د.ج" },
  EGP: { name: "Egyptian Pound", flag: "https://flagcdn.com/eg.svg", symbol: "£" },
  ERN: { name: "Eritrean Nakfa", flag: "https://flagcdn.com/er.svg", symbol: "Nfk" },
  ETB: { name: "Ethiopian Birr", flag: "https://flagcdn.com/et.svg", symbol: "Br" },
  FJD: { name: "Fijian Dollar", flag: "https://flagcdn.com/fj.svg", symbol: "$" },
  FKP: { name: "Falkland Islands Pound", flag: "https://flagcdn.com/fk.svg", symbol: "£" },
  GEL: { name: "Georgian Lari", flag: "https://flagcdn.com/ge.svg", symbol: "₾" },
  GHS: { name: "Ghanaian Cedi", flag: "https://flagcdn.com/gh.svg", symbol: "₵" },
  GIP: { name: "Gibraltar Pound", flag: "https://flagcdn.com/gi.svg", symbol: "£" },
  GMD: { name: "Gambian Dalasi", flag: "https://flagcdn.com/gm.svg", symbol: "D" },
  GNF: { name: "Guinean Franc", flag: "https://flagcdn.com/gn.svg", symbol: "FG" },
  GTQ: { name: "Guatemalan Quetzal", flag: "https://flagcdn.com/gt.svg", symbol: "Q" },
  GYD: { name: "Guyanaese Dollar", flag: "https://flagcdn.com/gy.svg", symbol: "$" },
  HNL: { name: "Honduran Lempira", flag: "https://flagcdn.com/hn.svg", symbol: "L" },
  HRK: { name: "Croatian Kuna", flag: "https://flagcdn.com/hr.svg", symbol: "kn" },
  HTG: { name: "Haitian Gourde", flag: "https://flagcdn.com/ht.svg", symbol: "G" },
  HUF: { name: "Hungarian Forint", flag: "https://flagcdn.com/hu.svg", symbol: "Ft" },
  IDR: { name: "Indonesian Rupiah", flag: "https://flagcdn.com/id.svg", symbol: "Rp" },
  ILS: { name: "Israeli New Shekel", flag: "https://flagcdn.com/il.svg", symbol: "₪" },
  IQD: { name: "Iraqi Dinar", flag: "https://flagcdn.com/iq.svg", symbol: "ع.د" },
  IRR: { name: "Iranian Rial", flag: "https://flagcdn.com/ir.svg", symbol: "﷼" },
  ISK: { name: "Icelandic Króna", flag: "https://flagcdn.com/is.svg", symbol: "kr" },
  JMD: { name: "Jamaican Dollar", flag: "https://flagcdn.com/jm.svg", symbol: "$" },
  JOD: { name: "Jordanian Dinar", flag: "https://flagcdn.com/jo.svg", symbol: "د.ا" },
  KES: { name: "Kenyan Shilling", flag: "https://flagcdn.com/ke.svg", symbol: "KSh" },
  KGS: { name: "Kyrgystani Som", flag: "https://flagcdn.com/kg.svg", symbol: "с" },
  KHR: { name: "Cambodian Riel", flag: "https://flagcdn.com/kh.svg", symbol: "៛" },
  KMF: { name: "Comorian Franc", flag: "https://flagcdn.com/km.svg", symbol: "CF" },
  KPW: { name: "North Korean Won", flag: "https://flagcdn.com/kp.svg", symbol: "₩" },
  KWD: { name: "Kuwaiti Dinar", flag: "https://flagcdn.com/kw.svg", symbol: "د.ك" },
  KYD: { name: "Cayman Islands Dollar", flag: "https://flagcdn.com/ky.svg", symbol: "$" },
  KZT: { name: "Kazakhstani Tenge", flag: "https://flagcdn.com/kz.svg", symbol: "₸" },
  LAK: { name: "Laotian Kip", flag: "https://flagcdn.com/la.svg", symbol: "₭" },
  LBP: { name: "Lebanese Pound", flag: "https://flagcdn.com/lb.svg", symbol: "ل.ل" },
  LKR: { name: "Sri Lankan Rupee", flag: "https://flagcdn.com/lk.svg", symbol: "Rs" },
  LRD: { name: "Liberian Dollar", flag: "https://flagcdn.com/lr.svg", symbol: "$" },
  LSL: { name: "Lesotho Loti", flag: "https://flagcdn.com/ls.svg", symbol: "L" },
  LYD: { name: "Libyan Dinar", flag: "https://flagcdn.com/ly.svg", symbol: "ل.د" },
  MAD: { name: "Moroccan Dirham", flag: "https://flagcdn.com/ma.svg", symbol: "د.م." },
  MDL: { name: "Moldovan Leu", flag: "https://flagcdn.com/md.svg", symbol: "L" },
  MGA: { name: "Malagasy Ariary", flag: "https://flagcdn.com/mg.svg", symbol: "Ar" },
  MKD: { name: "Macedonian Denar", flag: "https://flagcdn.com/mk.svg", symbol: "ден" },
  MMK: { name: "Myanmar Kyat", flag: "https://flagcdn.com/mm.svg", symbol: "K" },
  MNT: { name: "Mongolian Tugrik", flag: "https://flagcdn.com/mn.svg", symbol: "₮" },
  MOP: { name: "Macanese Pataca", flag: "https://flagcdn.com/mo.svg", symbol: "MOP$" },
  MRU: { name: "Mauritanian Ouguiya", flag: "https://flagcdn.com/mr.svg", symbol: "UM" },
  MUR: { name: "Mauritian Rupee", flag: "https://flagcdn.com/mu.svg", symbol: "₨" },
  MVR: { name: "Maldivian Rufiyaa", flag: "https://flagcdn.com/mv.svg", symbol: "Rf" },
  MWK: { name: "Malawian Kwacha", flag: "https://flagcdn.com/mw.svg", symbol: "MK" },
  MYR: { name: "Malaysian Ringgit", flag: "https://flagcdn.com/my.svg", symbol: "RM" },
  MZN: { name: "Mozambican Metical", flag: "https://flagcdn.com/mz.svg", symbol: "MT" },
  NAD: { name: "Namibian Dollar", flag: "https://flagcdn.com/na.svg", symbol: "$" },
  NGN: { name: "Nigerian Naira", flag: "https://flagcdn.com/ng.svg", symbol: "₦" },
  NIO: { name: "Nicaraguan Córdoba", flag: "https://flagcdn.com/ni.svg", symbol: "C$" },
  NPR: { name: "Nepalese Rupee", flag: "https://flagcdn.com/np.svg", symbol: "₨" },
  OMR: { name: "Omani Rial", flag: "https://flagcdn.com/om.svg", symbol: "﷼" },
  PAB: { name: "Panamanian Balboa", flag: "https://flagcdn.com/pa.svg", symbol: "B/." },
  PEN: { name: "Peruvian Sol", flag: "https://flagcdn.com/pe.svg", symbol: "S/." },
  PGK: { name: "Papua New Guinean Kina", flag: "https://flagcdn.com/pg.svg", symbol: "K" },
  PHP: { name: "Philippine Peso", flag: "https://flagcdn.com/ph.svg", symbol: "₱" },
  PKR: { name: "Pakistani Rupee", flag: "https://flagcdn.com/pk.svg", symbol: "₨" },
  PLN: { name: "Polish Złoty", flag: "https://flagcdn.com/pl.svg", symbol: "zł" },
  PYG: { name: "Paraguayan Guarani", flag: "https://flagcdn.com/py.svg", symbol: "₲" },
  QAR: { name: "Qatari Riyal", flag: "https://flagcdn.com/qa.svg", symbol: "ر.ق" },
  RON: { name: "Romanian Leu", flag: "https://flagcdn.com/ro.svg", symbol: "lei" },
  RSD: { name: "Serbian Dinar", flag: "https://flagcdn.com/rs.svg", symbol: "дин" },
  RWF: { name: "Rwandan Franc", flag: "https://flagcdn.com/rw.svg", symbol: "FRw" },
  SAR: { name: "Saudi Riyal", flag: "https://flagcdn.com/sa.svg", symbol: "﷼" },
  SBD: { name: "Solomon Islands Dollar", flag: "https://flagcdn.com/sb.svg", symbol: "$" },
  SCR: { name: "Seychellois Rupee", flag: "https://flagcdn.com/sc.svg", symbol: "₨" },
  SDG: { name: "Sudanese Pound", flag: "https://flagcdn.com/sd.svg", symbol: "ج.س." },
  SHP: { name: "Saint Helena Pound", flag: "https://flagcdn.com/sh.svg", symbol: "£" },
  SLL: { name: "Sierra Leonean Leone", flag: "https://flagcdn.com/sl.svg", symbol: "Le" },
  SOS: { name: "Somali Shilling", flag: "https://flagcdn.com/so.svg", symbol: "Sh" },
  SRD: { name: "Surinamese Dollar", flag: "https://flagcdn.com/sr.svg", symbol: "$" },
  SSP: { name: "South Sudanese Pound", flag: "https://flagcdn.com/ss.svg", symbol: "£" },
  STN: { name: "São Tomé and Príncipe Dobra", flag: "https://flagcdn.com/st.svg", symbol: "Db" },
  SVC: { name: "Salvadoran Colón", flag: "https://flagcdn.com/sv.svg", symbol: "$" },
  SYP: { name: "Syrian Pound", flag: "https://flagcdn.com/sy.svg", symbol: "£" },
  SZL: { name: "Swazi Lilangeni", flag: "https://flagcdn.com/sz.svg", symbol: "L" },
  THB: { name: "Thai Baht", flag: "https://flagcdn.com/th.svg", symbol: "฿" },
  TJS: { name: "Tajikistani Somoni", flag: "https://flagcdn.com/tj.svg", symbol: "ЅМ" },
  TMT: { name: "Turkmenistani Manat", flag: "https://flagcdn.com/tm.svg", symbol: "m" },
  TND: { name: "Tunisian Dinar", flag: "https://flagcdn.com/tn.svg", symbol: "د.ت" },
  TOP: { name: "Tongan Paʻanga", flag: "https://flagcdn.com/to.svg", symbol: "T$" },
  TTD: { name: "Trinidad and Tobago Dollar", flag: "https://flagcdn.com/tt.svg", symbol: "$" },
  TWD: { name: "New Taiwan Dollar", flag: "https://flagcdn.com/tw.svg", symbol: "NT$" },
  TZS: { name: "Tanzanian Shilling", flag: "https://flagcdn.com/tz.svg", symbol: "TSh" },
  UAH: { name: "Ukrainian Hryvnia", flag: "https://flagcdn.com/ua.svg", symbol: "₴" },
  UGX: { name: "Ugandan Shilling", flag: "https://flagcdn.com/ug.svg", symbol: "USh" },
  UYU: { name: "Uruguayan Peso", flag: "https://flagcdn.com/uy.svg", symbol: "$" },
  UZS: { name: "Uzbekistani Som", flag: "https://flagcdn.com/uz.svg", symbol: "so'm" },
  VES: { name: "Venezuelan Bolívar", flag: "https://flagcdn.com/ve.svg", symbol: "Bs.S" },
  VND: { name: "Vietnamese Dong", flag: "https://flagcdn.com/vn.svg", symbol: "₫" },
  VUV: { name: "Vanuatu Vatu", flag: "https://flagcdn.com/vu.svg", symbol: "VT" },
  WST: { name: "Samoan Tala", flag: "https://flagcdn.com/ws.svg", symbol: "T" },
  XAF: { name: "CFA Franc BEAC", flag: "https://flagcdn.com/cm.svg", symbol: "FCFA" },
  XCD: { name: "East Caribbean Dollar", flag: "https://flagcdn.com/ag.svg", symbol: "$" },
  XOF: { name: "CFA Franc BCEAO", flag: "https://flagcdn.com/ne.svg", symbol: "CFA" },
  XPF: { name: "CFP Franc", flag: "https://flagcdn.com/pf.svg", symbol: "₣" },
  YER: { name: "Yemeni Rial", flag: "https://flagcdn.com/ye.svg", symbol: "﷼" },
  ZMW: { name: "Zambian Kwacha", flag: "https://flagcdn.com/zm.svg", symbol: "ZK" },
  ZWL: { name: "Zimbabwean Dollar", flag: "https://flagcdn.com/zw.svg", symbol: "$" }
};


const popularCurrencies = ['EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY', 'INR'];

const amountInput = document.getElementById('amount');
const convertBtn = document.getElementById('convertBtn');
const fromDropdown = document.getElementById('fromDropdown');
const toDropdown = document.getElementById('toDropdown');
const fromList = document.getElementById('fromList');
const toList = document.getElementById('toList');
const fromCurrencyBox = document.getElementById('fromCurrencyBox');
const toCurrencyBox = document.getElementById('toCurrencyBox');
const resultPlaceholder = document.getElementById('resultPlaceholder');
const conversionResult = document.getElementById('conversionResult');
const convertedAmount = document.getElementById('convertedAmount');
const exchangeRate = document.getElementById('exchangeRate');
const lastUpdated = document.getElementById('lastUpdated');
const errorMessage = document.getElementById('errorMessage');
const popularCurrenciesGrid = document.getElementById('popularCurrencies');
const historyList = document.getElementById('historyList');
const clearHistory = document.getElementById('clearHistory');

let fromCurrency = '';
let toCurrency = '';

let conversionHistory = JSON.parse(localStorage.getItem('conversionHistory')) || [];

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

document.addEventListener('DOMContentLoaded', function() {
  initializeDropdowns();
  populatePopularCurrencies();
  displayHistory();
  
  updateLastUpdated();
  
  resultPlaceholder.style.display = 'flex';
  conversionResult.style.display = 'none';
});

function initializeDropdowns() {
  initializeDropdown(fromDropdown, 'from');
  initializeDropdown(toDropdown, 'to');
  
  fromDropdown.querySelector('.dropdown-select').addEventListener('click', () => {
    fromDropdown.classList.toggle('active');
    toDropdown.classList.remove('active');
    if (fromDropdown.classList.contains('active')) {
      const searchInput = fromList.querySelector('.dropdown-search');
      searchInput.value = '';
      searchInput.focus();
      filterDropdownItems(fromList, '');
    }
  });
  
  toDropdown.querySelector('.dropdown-select').addEventListener('click', () => {
    toDropdown.classList.toggle('active');
    fromDropdown.classList.remove('active');
    if (toDropdown.classList.contains('active')) {
      const searchInput = toList.querySelector('.dropdown-search');
      searchInput.value = '';
      searchInput.focus();
      filterDropdownItems(toList, '');
    }
  });
  
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      fromDropdown.classList.remove('active');
      toDropdown.classList.remove('active');
    }
  });
}

function initializeDropdown(dropdown, type) {
  const list = dropdown.querySelector('.dropdown-list');
  const itemsContainer = list.querySelector('.dropdown-items-container');
  const searchInput = list.querySelector('.dropdown-search');
  
  Object.keys(currencyData).forEach(code => {
    const currency = currencyData[code];
    const item = document.createElement('div');
    item.className = 'dropdown-item';
    item.innerHTML = `
      <img src="${currency.flag}" class="flag" alt="${code} flag">
      <span class="code">${code}</span>
      <span class="name">${currency.name}</span>
    `;
    item.addEventListener('click', () => selectCurrency(type, code, currency.name));
    itemsContainer.appendChild(item);
  });
  
  searchInput.addEventListener('input', (e) => {
    filterDropdownItems(list, e.target.value);
  });
  
  searchInput.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}

function filterDropdownItems(list, query) {
  const items = list.querySelectorAll('.dropdown-item');
  const lowercaseQuery = query.toLowerCase();
  
  items.forEach(item => {
    const code = item.querySelector('.code').textContent;
    const name = item.querySelector('.name').textContent.toLowerCase();
    
    if (code.toLowerCase().includes(lowercaseQuery) || name.includes(lowercaseQuery)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

function populatePopularCurrencies() {
  popularCurrencies.forEach(code => {
    if (currencyData[code]) {
      const currency = currencyData[code];
      const item = document.createElement('div');
      item.className = 'currency-item';
      item.innerHTML = `
        <div class="symbol">${currency.symbol}</div>
        <div class="code">${code}</div>
      `;
      item.addEventListener('click', () => {
        selectCurrency('to', code, currency.name);
        if (parseFloat(amountInput.value) > 0 && fromCurrency) {
          convertCurrency();
        }
      });
      popularCurrenciesGrid.appendChild(item);
    }
  });
}

function selectCurrency(type, code, name) {
  const dropdown = type === 'from' ? fromDropdown : toDropdown;
  const box = type === 'from' ? fromCurrencyBox : toCurrencyBox;
  
  dropdown.querySelector('.dropdown-text').textContent = `${name} (${code})`;
  dropdown.querySelector('.dropdown-text').style.color = '#2d3748';
  dropdown.classList.remove('active');
  
  const currency = currencyData[code];
  const display = box.querySelector('.currency-display');
  
  const flagPlaceholder = display.querySelector('.currency-flag-placeholder');
  const existingFlag = display.querySelector('.currency-flag');
  
  if (flagPlaceholder) {
    const flagImg = document.createElement('img');
    flagImg.className = 'currency-flag';
    flagImg.src = currency.flag;
    flagImg.alt = `${code} flag`;
    flagPlaceholder.replaceWith(flagImg);
  } else if (existingFlag) {
    existingFlag.src = currency.flag;
    existingFlag.alt = `${code} flag`;
  }
  
  display.querySelector('.currency-code').textContent = code;
  display.querySelector('.currency-name').textContent = name;
  display.querySelector('.currency-symbol').textContent = currency.symbol;
  
  if (type === 'from') {
    fromCurrency = code;
  } else {
    toCurrency = code;
  }
  
  if (type === 'from') {
    fromCurrencyBox.classList.add('active');
    toCurrencyBox.classList.remove('active');
  } else {
    toCurrencyBox.classList.add('active');
    fromCurrencyBox.classList.remove('active');
  }
  
  if (amountInput.value && parseFloat(amountInput.value) > 0 && fromCurrency && toCurrency) {
    convertCurrency();
  }
}

async function convertCurrency() {
  const amount = parseFloat(amountInput.value);
  
  if (!amount || amount <= 0) {
    showError('Please enter a valid amount greater than 0');
    resultPlaceholder.style.display = 'flex';
    conversionResult.style.display = 'none';
    return;
  }
  
  if (!fromCurrency || !toCurrency) {
    showError('Please select both currencies to convert');
    resultPlaceholder.style.display = 'flex';
    conversionResult.style.display = 'none';
    return;
  }
  
  try {
    resultPlaceholder.style.display = 'flex';
    conversionResult.style.display = 'none';
    resultPlaceholder.innerHTML = `
      <i class="fas fa-spinner"></i>
      <p>Converting...</p>
    `;
    
    const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    
    if (!res.ok) {
      throw new Error('API request failed');
    }
    
    const data = await res.json();
    
    if (!data.rates || !data.rates[toCurrency]) {
      throw new Error('Currency not supported by API');
    }
    
    const rate = data.rates[toCurrency];
    const converted = (amount * rate).toFixed(2);

    const fromSymbol = currencyData[fromCurrency].symbol;
    const toSymbol = currencyData[toCurrency].symbol;
    const formattedAmount = formatNumber(amount);
    const formattedConverted = formatNumber(converted);
    const formattedRate = parseFloat(rate).toFixed(6);

    convertedAmount.textContent = `${toSymbol}${formattedConverted}`;
    exchangeRate.textContent = `1 ${fromCurrency} = ${formattedRate} ${toCurrency}`;
    
    resultPlaceholder.style.display = 'none';
    conversionResult.style.display = 'flex';
    
    updateLastUpdated();
    
    addToHistory(fromCurrency, toCurrency, amount, converted, rate);
    
    hideError();
    
  } catch (error) {
    console.error('Conversion error:', error);
    showError('Failed to convert currency. Please check your connection and try again.');
  }
}

function addToHistory(from, to, amount, converted, rate) {
  const historyItem = {
    from,
    to,
    amount,
    converted,
    rate,
    timestamp: new Date().toISOString()
  };
  
  conversionHistory.unshift(historyItem);
  
  if (conversionHistory.length > 5) {
    conversionHistory = conversionHistory.slice(0, 5);
  }
  
  localStorage.setItem('conversionHistory', JSON.stringify(conversionHistory));
  
  displayHistory();
}

function displayHistory() {
  if (conversionHistory.length === 0) {
    historyList.innerHTML = `
      <div class="history-empty">
        <i class="fas fa-history"></i>
        <p>Your conversion history will appear here</p>
      </div>
    `;
    return;
  }
  
  historyList.innerHTML = '';
  
  conversionHistory.forEach(item => {
    const fromSymbol = currencyData[item.from].symbol;
    const toSymbol = currencyData[item.to].symbol;
    const formattedAmount = formatNumber(parseFloat(item.amount).toFixed(2));
    const formattedConverted = formatNumber(parseFloat(item.converted).toFixed(2));
    
    const historyItem = document.createElement('div');
    historyItem.className = 'history-item';
    historyItem.innerHTML = `
      <div class="history-info">
        <div class="history-amount">${fromSymbol}${formattedAmount} → ${toSymbol}${formattedConverted}</div>
        <div class="history-rate">1 ${item.from} = ${parseFloat(item.rate).toFixed(4)} ${item.to}</div>
      </div>
      <div class="history-time">${new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
    `;
    
    historyList.appendChild(historyItem);
  });
}

function updateLastUpdated() {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  lastUpdated.textContent = `Last updated: ${timeString}`;
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
  
  resultPlaceholder.style.display = 'flex';
  conversionResult.style.display = 'none';
  resultPlaceholder.innerHTML = `
    <i class="fas fa-money-bill-wave"></i>
    <p>Enter amount and select currencies to convert</p>
  `;
}

function hideError() {
  errorMessage.style.display = 'none';
}

convertBtn.addEventListener('click', convertCurrency);

amountInput.addEventListener('input', function() {
  if (this.value && parseFloat(this.value) > 0 && fromCurrency && toCurrency) {
    clearTimeout(this.debounce);
    this.debounce = setTimeout(convertCurrency, 800);
  } else {
    resultPlaceholder.style.display = 'flex';
    conversionResult.style.display = 'none';
    resultPlaceholder.innerHTML = `
      <i class="fas fa-money-bill-wave"></i>
      <p>Enter amount and select currencies to convert</p>
    `;
    hideError();
  }
});

amountInput.addEventListener('keypress', function(e) {
  const charCode = e.which ? e.which : e.keyCode;
  if (charCode !== 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
    e.preventDefault();
  }
  
  if (charCode === 46 && this.value.includes('.')) {
    e.preventDefault();
  }
  
  if (e.key === 'Enter') {
    convertCurrency();
  }
});

clearHistory.addEventListener('click', function() {
  conversionHistory = [];
  localStorage.setItem('conversionHistory', JSON.stringify(conversionHistory));
  displayHistory();
});