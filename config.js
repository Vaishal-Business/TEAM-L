/*
  EDIT THIS FILE ONLY for presentation content.
  title/team/teamName update the labels; video and logo update asset locations.
  Each assets value is a screenshot path. Missing screenshots automatically show a placeholder.
  Quiz options, answers (zero-based) and explanations can be changed below.
*/
window.DECK = {
  title: 'From Human Ideas to Machine Action',
  team: ['Zavrin', 'Rhys', 'Vaishal'], teamName: 'Team L',
  video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260809_012548_ef22562c-c0ae-4816-ad9d-f8922af4e6a7.mp4',
  logo: 'assets/logo.webp',
  assets: { ide:'assets/screens/ide-python-idle.webp', terminalC:'assets/screens/terminal-compile.webp', terminalPy:'assets/screens/terminal-python.webp', word:'assets/screens/ms-word.webp', excel:'assets/screens/excel.webp', powerpoint:'assets/screens/ms-powerpoint.webp', gimp:'assets/screens/gimp.webp', firefox:'assets/screens/firefox.webp', billing:'assets/screens/billing-software.webp', library:'assets/screens/library-management.webp', schoolMgmt:'assets/screens/school-management.webp', ubuntu:'assets/screens/ubuntu.webp', freeware:'assets/screens/freeware.webp', windows:'assets/screens/windows.webp', arduino:'assets/screens/arduino.webp', gcc:'assets/screens/gcc.webp' },
  quiz: [
    {q:'Which translator converts assembly language into machine code?', o:['Compiler','Assembler','Interpreter','Debugger'], a:1, e:'An assembler translates assembly mnemonics to machine code.'},
    {q:'Which translator stops at the first error it finds?', o:['Assembler','Compiler','Interpreter','IDE'], a:2, e:'An interpreter works sequentially, one line at a time.'},
    {q:'After a program is compiled, is the compiler needed to run it?', o:['Yes, always','No, object code runs on its own','Only with Python','Only to print'], a:1, e:'The executable/object code can be run independently.'},
    {q:'Which is NOT a programming tool?', o:['Debugger','IDE','Text editor','Ubuntu'], a:3, e:'Ubuntu is operating system software.'},
    {q:'A school management system is an example of?', o:['General-purpose software','Customised application software','Translator','System utility'], a:1, e:'It is built for an organisation’s specific needs.'}
  ]
};
