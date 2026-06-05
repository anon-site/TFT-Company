$content = Get-Content 'e:\Designe\HTML\Github\TFT-Company\js\main.js' -Raw

# Remove ops.cy entries
$content = $content -replace '"ops\.cy\.name":"[^"]*","ops\.cy\.tag":"[^"]*",', ''

# Arabic replacements
$content = $content -replace 'وفي اليونان وقبرص', 'في اليونان'
$content = $content -replace 'في اليونان وقبرص', 'في اليونان'
$content = $content -replace 'عبر اليونان وقبرص', 'عبر اليونان'
$content = $content -replace 'دول', 'دولة'

# Persian replacements
$content = $content -replace 'در یونان و قبرس', 'در یونان'
$content = $content -replace 'یونان اور قبرص', 'یونان'
$content = $content -replace 'کشور', 'کشور'

# Urdu replacements
$content = $content -replace 'یونان اور قبرص', 'یونان'
$content = $content -replace 'کشور', 'کشور'

# Spanish replacements
$content = $content -replace 'Grecia y Chipre', 'Grecia'
$content = $content -replace 'Países', 'País'

# French replacements
$content = $content -replace 'Grèce et Chypre', 'Grèce'
$content = $content -replace 'Pays', 'Pays'

# German replacements
$content = $content -replace 'Griechenland & Zypern', 'Griechenland'
$content = $content -replace 'Länder', 'Land'

# Italian replacements
$content = $content -replace 'Grecia e Cipro', 'Grecia'
$content = $content -replace 'Paesi', 'Paese'

# Greek replacements (already done but ensure)
$content = $content -replace 'Ελλάδα & Κύπρος', 'Ελλάδα'
$content = $content -replace 'Χώρες', 'Χώρα'

# English replacements (already done but ensure)
$content = $content -replace 'Greece & Cyprus', 'Greece'
$content = $content -replace 'Countries', 'Country'

Set-Content 'e:\Designe\HTML\Github\TFT-Company\js\main.js' -Value $content -NoNewline
