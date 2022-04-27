export enum heirsEnum  {
    //Spouse
   husband= 'husband', // زوج
   wife= 'wife',
   // Descendants احفاد
   son=   'son',
   daughter=   'daughter',
   paternal_grand_son=   'paternal_grand_son', // بن الابن
   paternal_grand_daughter=   'paternal_grand_daughter', //بنت الابن
   
   // Ancestors اسلاف
   father=   'father',
   mother=   'mother',
   paternal_grand_father=   'paternal_grand_father', // الجد لأب
   paternal_grand_mother=   'paternal_grand_mother', // الجدة لأب
   maternal_grand_mother=   'maternal_grand_mother', //  الجدة لأم
   
   // Sibling // إخوة
   full_brother=   'full_brother', // الأخ الشقيق
   full_sister=   'full_sister', // اخت شقيقة
   paternal_sister=   'paternal_sister', // أخت لأب

   paternal_brother=   'paternal_brother', // شقيق الأب
   maternal_sibling=   'maternal_sibling', // شقيق الأم
   
   // Other // اخري
   full_nephew=   'full_nephew', //   ابن أخ الشقيق
   paternal_nephew=  'paternal_nephew', // ابن اخ الأب

   full_paternal_uncle=  'full_paternal_uncle', // العم الشقيق 
   paternal_paternal_uncle=  'paternal_paternal_uncle', //  عم الأب
   full_cousin=  'full_cousin', //ابن عم شقيق
   paternal_cousin=  'paternal_cousin' // ابن عم الأب
  }