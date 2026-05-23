-- ════════════════════════════════════════════
-- WORLD CUP 2026 — FULL SQUAD SEED DATA
-- Run AFTER schema.sql
-- All 32 qualified nations + full squads
-- ════════════════════════════════════════════

-- ════ INSERT TEAMS ════
insert into teams (name,flag,faction,style,threat,formation,overall,color,atk,def,mid,group_name,confederat) values
('France',      '🇫🇷','FACTION ALPHA',  'Total Football Dominance',     'SP', '4-3-3',   93,'#4488FF',95,88,96,'A','UEFA'),
('Brazil',      '🇧🇷','FACTION BETA',   'Carnival Chaos Protocol',      'SP', '4-2-3-1', 91,'#00C851',94,82,90,'B','CONMEBOL'),
('Argentina',   '🇦🇷','FACTION GAMMA',  'Goat-Level Precision',         'S',  '4-3-3',   92,'#74ACDF',97,79,92,'C','CONMEBOL'),
('England',     '🏴󠁧󠁢󠁥󠁮󠁧󠁿','FACTION DELTA',  'Three Lions Warfare',          'S',  '4-3-3',   88,'#CF091B',88,84,87,'D','UEFA'),
('Spain',       '🇪🇸','FACTION EPSILON','Tiki-Taka Annihilation',       'A+', '4-3-3',   89,'#C60B1E',89,87,95,'E','UEFA'),
('Germany',     '🇩🇪','FACTION ZETA',   'Machine Efficiency',           'A+', '4-2-3-1', 87,'#FFCE00',87,90,88,'F','UEFA'),
('Portugal',    '🇵🇹','FACTION ETA',    'CR7 Eternal Protocol',         'A',  '4-3-3',   88,'#22AA55',91,81,85,'G','UEFA'),
('Japan',       '🇯🇵','FACTION THETA',  'Samurai Surge System',         'A',  '4-3-3',   83,'#BC002D',83,85,86,'H','AFC'),
('Netherlands', '🇳🇱','FACTION IOTA',   'Total Control Dutch',          'A+', '4-3-3',   88,'#FF6600',90,85,87,'A','UEFA'),
('Belgium',     '🇧🇪','FACTION KAPPA',  'Red Devil Strike Force',       'A',  '4-3-3',   86,'#ED2939',88,82,84,'B','UEFA'),
('Uruguay',     '🇺🇾','FACTION LAMBDA', 'Garra Charrúa Protocol',       'A',  '4-4-2',   85,'#5EB6E4',84,86,82,'C','CONMEBOL'),
('Croatia',     '🇭🇷','FACTION MU',     'Checkered War Machine',        'A',  '4-3-3',   85,'#FF0000',83,84,87,'D','UEFA'),
('Morocco',     '🇲🇦','FACTION NU',     'Atlas Lions Defense Grid',     'A',  '4-1-4-1', 84,'#C1272D',80,90,82,'E','CAF'),
('Senegal',     '🇸🇳','FACTION XI',     'Teranga Lions System',         'A',  '4-3-3',   83,'#00853F',82,82,83,'F','CAF'),
('USA',         '🇺🇸','FACTION OMICRON','New World Strike Corps',       'B+', '4-3-3',   81,'#3C3B6E',82,79,80,'G','CONCACAF'),
('Mexico',      '🇲🇽','FACTION PI',     'El Tri Chaos Engine',          'B+', '4-3-3',   80,'#006847',80,79,81,'H','CONCACAF'),
('Colombia',    '🇨🇴','FACTION RHO',    'Cafetero Flair Protocol',      'A',  '4-2-3-1', 84,'#FCD116',85,80,84,'A','CONMEBOL'),
('Ecuador',     '🇪🇨','FACTION SIGMA',  'Tri-Color Assault',            'B+', '4-3-3',   79,'#FFD100',78,80,78,'B','CONMEBOL'),
('Switzerland', '🇨🇭','FACTION TAU',    'Alpine Precision Defense',     'A',  '4-2-3-1', 83,'#FF0000',80,86,82,'C','UEFA'),
('Denmark',     '🇩🇰','FACTION UPSILON','Danish Dynamite Reborn',       'A',  '4-3-3',   84,'#C60C30',82,85,84,'D','UEFA'),
('Australia',   '🇦🇺','FACTION PHI',    'Socceroo Siege System',        'B',  '4-4-2',   77,'#FFCD00',76,78,77,'E','AFC'),
('South Korea', '🇰🇷','FACTION CHI',    'Taegeuk Warriors Protocol',    'B+', '4-3-3',   80,'#CD2E3A',81,79,80,'F','AFC'),
('Canada',      '🇨🇦','FACTION PSI',    'Maple Leaf Strike Force',      'B+', '4-3-3',   80,'#FF0000',81,78,79,'G','CONCACAF'),
('Iran',        '🇮🇷','FACTION OMEGA',  'Persian Shield System',        'B',  '4-4-2',   76,'#239F40',73,80,75,'H','AFC'),
('Poland',      '🇵🇱','FACTION AA',     'White Eagle War Protocol',     'B+', '4-3-3',   81,'#DC143C',82,79,80,'A','UEFA'),
('Serbia',      '🇷🇸','FACTION BB',     'Balkan Bull Force',            'B+', '4-2-3-1', 81,'#C6363C',83,79,80,'B','UEFA'),
('Chile',       '🇨🇱','FACTION CC',     'La Roja Press Machine',        'B+', '4-3-3',   80,'#D52B1E',81,78,80,'C','CONMEBOL'),
('Wales',       '🏴󠁧󠁢󠁷󠁬󠁳󠁿','FACTION DD',     'Dragon Heart Defense',         'B',  '5-3-2',   79,'#C8102E',77,82,77,'D','UEFA'),
('Saudi Arabia','🇸🇦','FACTION EE',     'Green Falcon Assault',         'B',  '4-4-2',   77,'#006C35',75,78,76,'E','AFC'),
('Ghana',       '🇬🇭','FACTION FF',     'Black Stars Strike System',    'B',  '4-3-3',   78,'#FCD116',79,76,78,'F','CAF'),
('Costa Rica',  '🇨🇷','FACTION GG',     'Ticos Iron Fortress',          'B',  '5-4-1',   76,'#002B7F',72,82,73,'G','CONCACAF'),
('Cameroon',    '🇨🇲','FACTION HH',     'Indomitable Lions Chaos',      'B',  '4-3-3',   78,'#007A5E',79,76,78,'H','CAF');

-- ════════════════════════════════════════════
-- HELPER: get team id by name
-- ════════════════════════════════════════════

-- ════ FRANCE SQUAD ════
with t as (select id from teams where name='France')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Hugo Lloris',      'IRON WALL',          1, 'GK', '🇫🇷',87,'REF',89,'CMD',85,'HAN',86,true, 37,'Tottenham'),
((select id from t),'Mike Maignan',     'THE RAVEN',         23, 'GK', '🇫🇷',86,'REF',91,'CMD',82,'HAN',84,false,28,'AC Milan'),
((select id from t),'Jules Koundé',     'GHOST LOCK',         5, 'DEF','🇫🇷',86,'DEF',88,'PAC',82,'PSS',76,false,25,'Barcelona'),
((select id from t),'Dayot Upamecano', 'THE FORTRESS',       4, 'DEF','🇫🇷',84,'DEF',87,'PAC',79,'STR',88,false,25,'Bayern Munich'),
((select id from t),'Lucas Hernández', 'STORM SHIELD',      21, 'DEF','🇫🇷',83,'DEF',85,'PAC',77,'STR',85,false,27,'PSG'),
((select id from t),'Theo Hernández',  'LIGHTNING FLANK',   22, 'DEF','🇫🇷',85,'PAC',90,'DEF',80,'DRB',82,false,26,'AC Milan'),
((select id from t),'Benjamin Pavard', 'THE WALL',           2, 'DEF','🇫🇷',83,'DEF',84,'PAC',78,'STR',83,false,27,'Inter Milan'),
((select id from t),'Aurélien Tchouaméni','MIDFIELD TITAN',  8, 'MID','🇫🇷',85,'DEF',86,'PSS',81,'PAC',78,false,23,'Real Madrid'),
((select id from t),'Adrien Rabiot',   'PHANTOM MID',       14, 'MID','🇫🇷',84,'PSS',82,'DEF',83,'STR',80,false,28,'Juventus'),
((select id from t),'N''Golo Kanté',   'VACUUM ENGINE',     13, 'MID','🇫🇷',87,'DEF',92,'PAC',81,'PSS',78,false,32,'Al-Ittihad'),
((select id from t),'Antoine Griezmann','THE ARTIST',         7, 'MID','🇫🇷',87,'PSS',86,'FIN',84,'DRB',83,false,32,'Atletico Madrid'),
((select id from t),'Kylian Mbappé',   'LIGHTSPEED',        10, 'FWD','🇫🇷',92,'PAC',99,'FIN',95,'DRB',93,false,25,'Real Madrid'),
((select id from t),'Ousmane Dembélé', 'CHAOS WINGER',      11, 'FWD','🇫🇷',86,'PAC',96,'DRB',91,'FIN',78,false,27,'PSG'),
((select id from t),'Olivier Giroud',  'AERIAL STRIKE',      9, 'FWD','🇫🇷',83,'FIN',84,'STR',88,'HED',90,false,37,'LA Galaxy');

-- ════ BRAZIL SQUAD ════
with t as (select id from teams where name='Brazil')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Alisson Becker',  'THE SAVIOUR',        1, 'GK', '🇧🇷',90,'REF',93,'CMD',88,'HAN',87,false,31,'Liverpool'),
((select id from t),'Ederson',         'SWEEPER KING',      12, 'GK', '🇧🇷',89,'REF',88,'CMD',91,'HAN',84,false,30,'Man City'),
((select id from t),'Danilo',          'FORTRESS RIGHT',     2, 'DEF','🇧🇷',83,'DEF',82,'PAC',80,'PSS',78,true, 32,'Juventus'),
((select id from t),'Alex Sandro',     'BLITZ LEFT',         6, 'DEF','🇧🇷',82,'DEF',81,'PAC',82,'DRB',79,false,32,'Juventus'),
((select id from t),'Marquinhos',      'IRON CAPTAIN',       4, 'DEF','🇧🇷',88,'DEF',91,'PAC',77,'STR',84,false,29,'PSG'),
((select id from t),'Éder Militão',    'THE COLOSSUS',      14, 'DEF','🇧🇷',87,'DEF',89,'PAC',82,'STR',86,false,25,'Real Madrid'),
((select id from t),'Casemiro',        'DESTRUCTION PROTOCOL',5,'MID','🇧🇷',87,'DEF',91,'STR',86,'PSS',75,false,31,'Man United'),
((select id from t),'Fabinho',         'THE ANCHOR',        15, 'MID','🇧🇷',85,'DEF',88,'STR',82,'PAC',74,false,30,'Al-Ittihad'),
((select id from t),'Fred',            'PRESS ENGINE',       8, 'MID','🇧🇷',82,'DEF',84,'STR',80,'PAC',77,false,30,'Man United'),
((select id from t),'Neymar Jr.',      'CHAOS MAESTRO',     10, 'MID','🇧🇷',89,'DRB',95,'FIN',86,'PSS',88,false,32,'Al-Hilal'),
((select id from t),'Vinícius Jr.',    'CARNIVAL GHOST',    20, 'FWD','🇧🇷',91,'PAC',98,'DRB',96,'FIN',88,false,23,'Real Madrid'),
((select id from t),'Rodrygo',         'SHADOW STRIKER',    11, 'FWD','🇧🇷',85,'PAC',92,'DRB',88,'FIN',82,false,23,'Real Madrid'),
((select id from t),'Gabriel Jesus',   'THE MISSIONARY',     9, 'FWD','🇧🇷',84,'FIN',84,'PAC',86,'DRB',82,false,26,'Arsenal'),
((select id from t),'Richarlison',     'TORPEDO',           19, 'FWD','🇧🇷',83,'FIN',83,'STR',82,'PAC',84,false,26,'Tottenham');

-- ════ ARGENTINA SQUAD ════
with t as (select id from teams where name='Argentina')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Emiliano Martínez','THE DIABLO',        23, 'GK', '🇦🇷',89,'REF',91,'CMD',87,'HAN',86,false,31,'Aston Villa'),
((select id from t),'Franco Armani',   'IRON CAGE',         12, 'GK', '🇦🇷',82,'REF',83,'CMD',81,'HAN',82,false,37,'River Plate'),
((select id from t),'Germán Pezzella', 'ROCK SOLID',         6, 'DEF','🇦🇷',80,'DEF',83,'STR',84,'HED',82,false,32,'Real Betis'),
((select id from t),'Gonzalo Montiel', 'THE EXECUTIONER',    4, 'DEF','🇦🇷',80,'DEF',80,'PAC',82,'PSS',76,false,26,'Sevilla'),
((select id from t),'Cristian Romero', 'THE PREDATOR',      13, 'DEF','🇦🇷',85,'DEF',88,'STR',86,'PAC',80,false,25,'Tottenham'),
((select id from t),'Marcos Acuña',    'BLITZ SANDRO',       8, 'DEF','🇦🇷',81,'DEF',80,'PAC',84,'STR',79,false,31,'Sevilla'),
((select id from t),'Nicolás Tagliafico','SHADOW LEFT',     26, 'DEF','🇦🇷',81,'DEF',82,'PAC',81,'DRB',78,false,30,'Lyon'),
((select id from t),'Rodrigo De Paul', 'ENGINE ROOM',        7, 'MID','🇦🇷',85,'PSS',86,'DEF',82,'STR',80,false,29,'Atletico Madrid'),
((select id from t),'Enzo Fernández',  'THE REVELATION',    24, 'MID','🇦🇷',84,'PSS',85,'DEF',81,'PAC',79,false,23,'Chelsea'),
((select id from t),'Leandro Paredes', 'THE METRONOME',      5, 'MID','🇦🇷',82,'PSS',86,'DEF',79,'STR',76,false,29,'Juventus'),
((select id from t),'Alexis Mac Allister','THE ARCHITECT',  20, 'MID','🇦🇷',84,'PSS',85,'DEF',82,'FIN',78,false,24,'Liverpool'),
((select id from t),'Lionel Messi',    'THE GOAT',          10, 'FWD','🇦🇷',94,'DRB',99,'FIN',97,'PSS',96,true, 37,'Inter Miami'),
((select id from t),'Ángel Di María',  'THE FLEA WING',     11, 'FWD','🇦🇷',85,'PAC',88,'DRB',87,'FIN',82,false,36,'Benfica'),
((select id from t),'Julián Álvarez',  'THE SPIDER',         9, 'FWD','🇦🇷',85,'FIN',86,'PAC',88,'STR',80,false,24,'Atletico Madrid'),
((select id from t),'Lautaro Martínez','THE BULL',          22, 'FWD','🇦🇷',86,'FIN',89,'STR',84,'PAC',83,false,26,'Inter Milan');

-- ════ ENGLAND SQUAD ════
with t as (select id from teams where name='England')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Jordan Pickford', 'THE WALL',           1, 'GK', '🏴󠁧󠁢󠁥󠁮󠁧󠁿',85,'REF',88,'CMD',82,'HAN',83,false,30,'Everton'),
((select id from t),'Nick Pope',       'FORTRESS NORTH',    13, 'GK', '🏴󠁧󠁢󠁥󠁮󠁧󠁿',83,'REF',85,'CMD',81,'HAN',82,false,31,'Newcastle'),
((select id from t),'Kyle Walker',     'RAPID IRON',         2, 'DEF','🏴󠁧󠁢󠁥󠁮󠁧󠁿',84,'PAC',89,'DEF',84,'STR',82,false,33,'Man City'),
((select id from t),'Harry Maguire',   'THE MOUNTAIN',       6, 'DEF','🏴󠁧󠁢󠁥󠁮󠁧󠁿',82,'DEF',84,'STR',90,'HED',89,false,31,'Man United'),
((select id from t),'John Stones',     'THE ARCHITECT',      5, 'DEF','🏴󠁧󠁢󠁥󠁮󠁧󠁿',85,'DEF',87,'PSS',82,'PAC',78,false,29,'Man City'),
((select id from t),'Luke Shaw',       'BLADE LEFT',         3, 'DEF','🏴󠁧󠁢󠁥󠁮󠁧󠁿',83,'DEF',82,'PAC',80,'DRB',80,false,28,'Man United'),
((select id from t),'Kieran Trippier', 'CROSSFIRE',         12, 'DEF','🏴󠁧󠁢󠁥󠁮󠁧󠁿',83,'DEF',82,'PSS',84,'PAC',79,false,33,'Newcastle'),
((select id from t),'Declan Rice',     'WAR MACHINE',        4, 'MID','🏴󠁧󠁢󠁥󠁮󠁧󠁿',87,'DEF',89,'STR',83,'PSS',80,false,25,'Arsenal'),
((select id from t),'Jordan Henderson','THE GENERAL',        8, 'MID','🏴󠁧󠁢󠁥󠁮󠁧󠁿',82,'PSS',83,'DEF',82,'STR',79,true, 33,'Ajax'),
((select id from t),'Jude Bellingham', 'KING JUDE',         22, 'MID','🏴󠁧󠁢󠁥󠁮󠁧󠁿',90,'DRB',90,'FIN',89,'PAC',86,false,20,'Real Madrid'),
((select id from t),'Phil Foden',      'THE WIZARD',        10, 'MID','🏴󠁧󠁢󠁥󠁮󠁧󠁿',88,'DRB',91,'PSS',88,'FIN',84,false,23,'Man City'),
((select id from t),'Harry Kane',      'THE STRIKER',        9, 'FWD','🏴󠁧󠁢󠁥󠁮󠁧󠁿',91,'FIN',94,'STR',86,'PSS',87,false,30,'Bayern Munich'),
((select id from t),'Marcus Rashford', 'RED DEVIL WINGS',   11, 'FWD','🏴󠁧󠁢󠁥󠁮󠁧󠁿',85,'PAC',93,'FIN',82,'DRB',85,false,26,'Man United'),
((select id from t),'Bukayo Saka',     'THE SAKA BOMB',      7, 'FWD','🏴󠁧󠁢󠁥󠁮󠁧󠁿',87,'DRB',90,'PAC',88,'FIN',83,false,22,'Arsenal');

-- ════ SPAIN SQUAD ════
with t as (select id from teams where name='Spain')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Unai Simón',      'THE BASQUE WALL',    1, 'GK', '🇪🇸',85,'REF',87,'CMD',84,'HAN',83,false,26,'Athletic Bilbao'),
((select id from t),'David Raya',      'SWEEP KEEPER',      13, 'GK', '🇪🇸',84,'REF',85,'CMD',86,'HAN',82,false,28,'Arsenal'),
((select id from t),'Dani Carvajal',   'CHAMPION RIGHT',     2, 'DEF','🇪🇸',85,'DEF',85,'PAC',80,'PSS',82,true, 32,'Real Madrid'),
((select id from t),'Alejandro Balde', 'BARCA ROCKET',       3, 'DEF','🇪🇸',83,'PAC',89,'DRB',83,'DEF',80,false,20,'Barcelona'),
((select id from t),'Aymeric Laporte', 'LA ROCA',            6, 'DEF','🇪🇸',84,'DEF',87,'PSS',83,'STR',82,false,29,'Al-Nassr'),
((select id from t),'Pau Cubarsí',     'THE PRODIGY CB',    24, 'DEF','🇪🇸',82,'DEF',84,'PAC',81,'PSS',80,false,17,'Barcelona'),
((select id from t),'Nacho Fernández', 'MR RELIABLE',       24, 'DEF','🇪🇸',82,'DEF',85,'STR',80,'HED',82,false,33,'Real Madrid'),
((select id from t),'Rodri',           'THE DICTATOR',      16, 'MID','🇪🇸',91,'DEF',89,'PSS',90,'STR',84,false,27,'Man City'),
((select id from t),'Fabián Ruiz',     'SILK ENGINE',        8, 'MID','🇪🇸',84,'PSS',87,'DEF',80,'FIN',79,false,27,'PSG'),
((select id from t),'Mikel Merino',    'IRON MIND',         14, 'MID','🇪🇸',83,'DEF',83,'PSS',82,'STR',82,false,27,'Arsenal'),
((select id from t),'Pedri',           'THE MAGICIAN',      10, 'MID','🇪🇸',88,'DRB',90,'PSS',91,'PAC',82,false,21,'Barcelona'),
((select id from t),'Lamine Yamal',    'THE PRODIGY',       19, 'FWD','🇪🇸',89,'DRB',97,'PAC',93,'FIN',88,false,16,'Barcelona'),
((select id from t),'Ferran Torres',   'VALENCIA BOMB',     11, 'FWD','🇪🇸',82,'PAC',91,'FIN',81,'DRB',80,false,23,'Barcelona'),
((select id from t),'Álvaro Morata',   'THE CAPTAIN',        9, 'FWD','🇪🇸',83,'FIN',84,'HED',87,'STR',82,false,31,'Atletico Madrid'),
((select id from t),'Dani Olmo',       'THE CONNECTOR',      7, 'FWD','🇪🇸',85,'PSS',87,'DRB',84,'FIN',80,false,26,'Leipzig');

-- ════ GERMANY SQUAD ════
with t as (select id from teams where name='Germany')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Manuel Neuer',    'THE TITAN',          1, 'GK', '🇩🇪',90,'REF',88,'CMD',94,'HAN',89,true, 38,'Bayern Munich'),
((select id from t),'Marc-André ter Stegen','BARCA KEEP',   12, 'GK', '🇩🇪',89,'REF',92,'CMD',85,'HAN',86,false,31,'Barcelona'),
((select id from t),'Thilo Kehrer',    'IRON RIGHT',         5, 'DEF','🇩🇪',80,'DEF',82,'PAC',80,'STR',79,false,27,'Monaco'),
((select id from t),'Niklas Süle',     'WALL UNIT',          2, 'DEF','🇩🇪',82,'DEF',86,'STR',90,'HED',87,false,28,'Dortmund'),
((select id from t),'Jonathan Tah',    'THE ENFORCER',       4, 'DEF','🇩🇪',82,'DEF',85,'STR',86,'PAC',78,false,27,'Bayer Leverkusen'),
((select id from t),'David Raum',      'LEFT MACHINE',       3, 'DEF','🇩🇪',81,'DEF',80,'PAC',84,'PSS',78,false,25,'Leipzig'),
((select id from t),'Nico Schlotterbeck','COLD STEEL',      15, 'DEF','🇩🇪',83,'DEF',86,'STR',82,'PAC',80,false,23,'Dortmund'),
((select id from t),'Joshua Kimmich',  'THE COMMANDER',      6, 'MID','🇩🇪',89,'PSS',91,'DEF',88,'PAC',79,false,29,'Bayern Munich'),
((select id from t),'Leon Goretzka',   'POWER DRIVE',        8, 'MID','🇩🇪',84,'DEF',84,'STR',86,'PSS',81,false,29,'Bayern Munich'),
((select id from t),'Ilkay Gündogan',  'THE MAESTRO',       21, 'MID','🇩🇪',86,'PSS',90,'DEF',80,'FIN',78,false,33,'Man City'),
((select id from t),'Jamal Musiala',   'SILK PROGRAM',      14, 'MID','🇩🇪',88,'DRB',92,'PSS',86,'PAC',84,false,21,'Bayern Munich'),
((select id from t),'Thomas Müller',   'RAUMDEUTER',         9, 'FWD','🇩🇪',85,'FIN',83,'PSS',87,'POS',96,false,34,'Bayern Munich'),
((select id from t),'Kai Havertz',     'GHOST STRIKER',     13, 'FWD','🇩🇪',84,'FIN',84,'DRB',82,'PAC',80,false,24,'Arsenal'),
((select id from t),'Leroy Sané',      'PURE PACE',          7, 'FWD','🇩🇪',86,'PAC',95,'DRB',88,'FIN',80,false,28,'Bayern Munich'),
((select id from t),'Serge Gnabry',    'THE ASSASSIN',      10, 'FWD','🇩🇪',84,'PAC',90,'FIN',82,'DRB',84,false,28,'Bayern Munich');

-- ════ PORTUGAL SQUAD ════
with t as (select id from teams where name='Portugal')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Rui Patrício',    'THE GUARDIAN',       1, 'GK', '🇵🇹',83,'REF',84,'CMD',81,'HAN',82,false,35,'Roma'),
((select id from t),'Diogo Costa',     'NEXT GEN KEEPER',   12, 'GK', '🇵🇹',85,'REF',87,'CMD',83,'HAN',83,false,24,'Porto'),
((select id from t),'João Cancelo',    'THE COMPLETE BACK',  2, 'DEF','🇵🇹',87,'PAC',84,'DEF',84,'PSS',86,false,29,'Barcelona'),
((select id from t),'Rúben Dias',      'THE SENTINEL',       5, 'DEF','🇵🇹',89,'DEF',92,'STR',86,'PAC',78,true, 26,'Man City'),
((select id from t),'Pepe',            'THE LEGEND',         3, 'DEF','🇵🇹',82,'DEF',84,'STR',90,'HED',88,false,41,'Porto'),
((select id from t),'Nuno Mendes',     'LEFT BLADE',        20, 'DEF','🇵🇹',84,'PAC',90,'DEF',81,'DRB',82,false,21,'PSG'),
((select id from t),'José Fonte',      'IRON WALL',          6, 'DEF','🇵🇹',80,'DEF',83,'STR',84,'HED',82,false,40,'Lille'),
((select id from t),'João Moutinho',   'THE CONDUCTOR',      8, 'MID','🇵🇹',82,'PSS',88,'DEF',77,'FIN',75,false,37,'Wolves'),
((select id from t),'Renato Sanches',  'FURY ENGINE',       16, 'MID','🇵🇹',82,'DEF',80,'STR',84,'PAC',83,false,26,'PSG'),
((select id from t),'Bernardo Silva',  'THE MAGICIAN',      10, 'MID','🇵🇹',88,'DRB',88,'PSS',91,'PAC',83,false,29,'Man City'),
((select id from t),'William Carvalho','IRON LUNG',         14, 'MID','🇵🇹',81,'DEF',84,'STR',82,'PSS',77,false,31,'Real Betis'),
((select id from t),'Cristiano Ronaldo','CR7 ETERNAL',       7, 'FWD','🇵🇹',91,'FIN',96,'PAC',83,'AUR',98,false,39,'Al-Nassr'),
((select id from t),'Diogo Jota',      'SHADOW STRIKER',    11, 'FWD','🇵🇹',86,'FIN',87,'PAC',86,'DRB',84,false,27,'Liverpool'),
((select id from t),'Rafael Leão',     'THE LION',          17, 'FWD','🇵🇹',85,'PAC',94,'DRB',88,'FIN',80,false,24,'AC Milan'),
((select id from t),'André Silva',     'THE EXECUTIONER',    9, 'FWD','🇵🇹',82,'FIN',84,'STR',80,'HED',82,false,28,'Leipzig');

-- ════ JAPAN SQUAD ════
with t as (select id from teams where name='Japan')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Shuichi Gonda',   'WALL OF NIPPON',     1, 'GK', '🇯🇵',81,'REF',83,'CMD',80,'HAN',80,false,34,'Shimizu'),
((select id from t),'Zion Suzuki',     'YOUNG SAMURAI',     12, 'GK', '🇯🇵',79,'REF',80,'CMD',78,'HAN',79,false,21,'Sint-Truiden'),
((select id from t),'Hiroki Sakai',    'RISING SUN RIGHT',   2, 'DEF','🇯🇵',80,'DEF',81,'PAC',82,'PSS',76,false,33,'Urawa Reds'),
((select id from t),'Yuto Nagatomo',   'VETERAN BLADE',      3, 'DEF','🇯🇵',79,'DEF',79,'PAC',80,'DRB',77,false,37,'FC Tokyo'),
((select id from t),'Maya Yoshida',    'CAPTAIN SHIELD',     4, 'DEF','🇯🇵',81,'DEF',83,'STR',82,'HED',83,true, 35,'Schalke'),
((select id from t),'Ko Itakura',      'THE ROCK',           5, 'DEF','🇯🇵',80,'DEF',82,'STR',80,'PAC',78,false,26,'Dortmund'),
((select id from t),'Miki Yamane',     'DIGITAL RIGHT',     22, 'DEF','🇯🇵',79,'DEF',80,'PAC',81,'PSS',75,false,27,'Kawasaki'),
((select id from t),'Wataru Endō',     'COMMAND CENTER',     6, 'MID','🇯🇵',83,'DEF',85,'PSS',81,'STR',79,false,30,'Liverpool'),
((select id from t),'Hidemasa Morita', 'SILENT ENGINE',      8, 'MID','🇯🇵',81,'DEF',82,'PSS',80,'PAC',78,false,28,'Sporting CP'),
((select id from t),'Junya Ito',       'SAMURAI WARP',      10, 'MID','🇯🇵',83,'PAC',92,'DRB',84,'FIN',78,false,31,'Reims'),
((select id from t),'Daichi Kamada',   'THE TECHNICIAN',    14, 'MID','🇯🇵',82,'PSS',84,'DRB',81,'FIN',79,false,27,'Lazio'),
((select id from t),'Ayase Ueda',      'PRECISION STRIKER',  9, 'FWD','🇯🇵',82,'FIN',84,'PAC',86,'STR',78,false,25,'Feyenoord'),
((select id from t),'Ritsu Dōan',      'EURO SAMURAI',      11, 'FWD','🇯🇵',83,'FIN',82,'DRB',84,'PAC',88,false,25,'Freiburg'),
((select id from t),'Takuma Asano',    'LIGHTNING BOLT',    15, 'FWD','🇯🇵',81,'PAC',95,'DRB',80,'FIN',77,false,29,'Dortmund'),
((select id from t),'Kaoru Mitoma',    'THE PHANTOM',       20, 'FWD','🇯🇵',84,'PAC',93,'DRB',87,'FIN',80,false,26,'Brighton');

-- ════ NETHERLANDS SQUAD ════
with t as (select id from teams where name='Netherlands')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Andries Noppert', 'ORANGE FORTRESS',    1, 'GK', '🇳🇱',82,'REF',84,'CMD',80,'HAN',81,false,29,'Heerenveen'),
((select id from t),'Remko Pasveer',   'VETERAN KEEP',      12, 'GK', '🇳🇱',81,'REF',82,'CMD',81,'HAN',80,false,39,'Ajax'),
((select id from t),'Denzel Dumfries', 'INTER MACHINE',      2, 'DEF','🇳🇱',84,'PAC',87,'DEF',82,'STR',83,false,27,'Inter Milan'),
((select id from t),'Virgil van Dijk', 'THE COMMANDER',      4, 'DEF','🇳🇱',90,'DEF',92,'STR',90,'HED',91,true, 32,'Liverpool'),
((select id from t),'Nathan Aké',      'CHELSEA WALL',       5, 'DEF','🇳🇱',84,'DEF',86,'STR',82,'PAC',80,false,28,'Man City'),
((select id from t),'Daley Blind',     'DUTCH MAESTRO',      3, 'DEF','🇳🇱',81,'DEF',81,'PSS',83,'PAC',78,false,33,'Bayern Munich'),
((select id from t),'Frenkie de Jong', 'TOTAL FOOTBALL',     8, 'MID','🇳🇱',88,'PSS',89,'DRB',86,'DEF',82,false,26,'Barcelona'),
((select id from t),'Teun Koopmeiners','ENGINE MASTER',     14, 'MID','🇳🇱',85,'PSS',85,'FIN',82,'DEF',82,false,25,'Atalanta'),
((select id from t),'Georginio Wijnaldum','THE GENERAL',    10, 'MID','🇳🇱',84,'DEF',82,'PSS',85,'STR',80,false,33,'PSG'),
((select id from t),'Xavi Simons',     'THE HEIR',          17, 'MID','🇳🇱',84,'DRB',88,'PSS',84,'PAC',86,false,20,'PSG'),
((select id from t),'Memphis Depay',   'SOLO STRIKER',       9, 'FWD','🇳🇱',85,'FIN',87,'DRB',85,'PAC',84,false,29,'Atletico Madrid'),
((select id from t),'Cody Gakpo',      'DUTCH LIGHTNING',   11, 'FWD','🇳🇱',85,'PAC',88,'FIN',84,'DRB',83,false,24,'Liverpool'),
((select id from t),'Wout Weghorst',   'THE GIANT',         19, 'FWD','🇳🇱',82,'STR',88,'HED',90,'FIN',79,false,30,'Burnley'),
((select id from t),'Steven Bergwijn', 'AJAX BULLET',        7, 'FWD','🇳🇱',82,'PAC',90,'DRB',82,'FIN',79,false,25,'Ajax');

-- ════ BELGIUM SQUAD ════
with t as (select id from teams where name='Belgium')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Thibaut Courtois','RED DEVIL KEEPER',   1, 'GK', '🇧🇪',91,'REF',93,'CMD',88,'HAN',89,false,31,'Real Madrid'),
((select id from t),'Koen Casteels',   'WOLF KEEPER',       12, 'GK', '🇧🇪',84,'REF',86,'CMD',82,'HAN',83,false,31,'Wolfsburg'),
((select id from t),'Thomas Meunier',  'DEVIL RIGHT',        2, 'DEF','🇧🇪',82,'DEF',82,'PAC',82,'STR',80,false,31,'Dortmund'),
((select id from t),'Toby Alderweireld','IRON SHIELD',       4, 'DEF','🇧🇪',83,'DEF',86,'STR',84,'HED',85,false,34,'Al-Duhail'),
((select id from t),'Jan Vertonghen',  'THE VETERAN',        5, 'DEF','🇧🇪',82,'DEF',84,'STR',82,'HED',83,true, 36,'Anderlecht'),
((select id from t),'Yannick Carrasco','LIGHTNING BACK',     3, 'DEF','🇧🇪',83,'PAC',88,'DRB',82,'DEF',79,false,30,'Atletico Madrid'),
((select id from t),'Axel Witsel',     'THE ENGINE',         6, 'MID','🇧🇪',83,'DEF',84,'STR',82,'PSS',80,false,34,'Atletico Madrid'),
((select id from t),'Kevin De Bruyne', 'THE MAESTRO',        7, 'MID','🇧🇪',91,'PSS',94,'FIN',83,'DRB',87,false,32,'Man City'),
((select id from t),'Youri Tielemans', 'SILENT GENERAL',     8, 'MID','🇧🇪',84,'PSS',85,'DEF',81,'FIN',79,false,26,'Aston Villa'),
((select id from t),'Leandro Trossard','ARSENAL WEAPON',    11, 'MID','🇧🇪',83,'DRB',84,'FIN',82,'PAC',82,false,28,'Arsenal'),
((select id from t),'Romelu Lukaku',   'BIG ROM',            9, 'FWD','🇧🇪',88,'FIN',89,'STR',94,'PAC',82,false,30,'Inter Milan'),
((select id from t),'Dries Mertens',   'THE DRIBBLER',      10, 'FWD','🇧🇪',84,'DRB',86,'FIN',85,'PAC',82,false,36,'Galatasaray'),
((select id from t),'Lois Openda',     'RISING DEVIL',      19, 'FWD','🇧🇪',83,'PAC',91,'FIN',82,'DRB',80,false,23,'Leipzig'),
((select id from t),'Charles De Ketelaere','THE TECHNICIAN',14,'FWD','🇧🇪',82,'DRB',84,'PSS',82,'FIN',79,false,22,'Atalanta');

-- ════ URUGUAY SQUAD ════
with t as (select id from teams where name='Uruguay')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Sergio Rochet',   'CELESTE WALL',       1, 'GK', '🇺🇾',82,'REF',84,'CMD',80,'HAN',81,false,29,'Nacional'),
((select id from t),'Fernando Muslera','THE VETERAN KEEP',  12, 'GK', '🇺🇾',80,'REF',81,'CMD',80,'HAN',79,false,37,'Galatasaray'),
((select id from t),'Ronald Araújo',   'BARCELONA ROCK',     4, 'DEF','🇺🇾',86,'DEF',88,'STR',87,'PAC',82,false,24,'Barcelona'),
((select id from t),'Diego Godín',     'THE WARRIOR',        3, 'DEF','🇺🇾',81,'DEF',84,'STR',86,'HED',85,true, 37,'Vélez'),
((select id from t),'José María Giménez','IRON ATLETI',      2, 'DEF','🇺🇾',84,'DEF',87,'STR',84,'PAC',78,false,28,'Atletico Madrid'),
((select id from t),'Mathías Olivera', 'NAPLES BLADE',       5, 'DEF','🇺🇾',82,'PAC',85,'DEF',80,'DRB',79,false,25,'Napoli'),
((select id from t),'Rodrigo Bentancur','CONTROL TOWER',     8, 'MID','🇺🇾',84,'DEF',83,'PSS',84,'STR',80,false,26,'Tottenham'),
((select id from t),'Lucas Torreira',  'THE DESTROYER',      6, 'MID','🇺🇾',83,'DEF',86,'STR',80,'PAC',77,false,27,'Galatasaray'),
((select id from t),'Federico Valverde','THE MACHINE',        7, 'MID','🇺🇾',87,'STR',83,'PSS',85,'PAC',82,false,24,'Real Madrid'),
((select id from t),'Giorgian De Arrascaeta','FLAMENGO WIZARD',10,'MID','🇺🇾',84,'DRB',86,'PSS',85,'FIN',80,false,29,'Flamengo'),
((select id from t),'Luis Suárez',     'EL PISTOLERO',       9, 'FWD','🇺🇾',84,'FIN',88,'DRB',80,'STR',82,false,37,'Inter Miami'),
((select id from t),'Darwin Núñez',    'THE TORPEDO',       19, 'FWD','🇺🇾',86,'PAC',93,'FIN',83,'STR',84,false,24,'Liverpool'),
((select id from t),'Edinson Cavani',  'EL MATADOR',        21, 'FWD','🇺🇾',82,'FIN',86,'STR',82,'HED',84,false,36,'Valencia'),
((select id from t),'Facundo Torres',  'RISING STAR',       17, 'FWD','🇺🇾',80,'PAC',88,'DRB',82,'FIN',78,false,23,'Orlando City');

-- ════ CROATIA SQUAD ════
with t as (select id from teams where name='Croatia')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Dominik Livaković','CHECKERED WALL',    1, 'GK', '🇭🇷',85,'REF',87,'CMD',83,'HAN',84,false,28,'Fenerbahçe'),
((select id from t),'Ivica Ivušić',    'OSIJEK KEEPER',     12, 'GK', '🇭🇷',79,'REF',80,'CMD',78,'HAN',79,false,28,'Osijek'),
((select id from t),'Josip Juranović', 'CELTIC BLADE',       2, 'DEF','🇭🇷',81,'PAC',84,'DEF',80,'DRB',79,false,27,'Union Berlin'),
((select id from t),'Dejan Lovren',    'THE WARRIOR',        6, 'DEF','🇭🇷',81,'DEF',83,'STR',82,'HED',83,false,34,'Zenit'),
((select id from t),'Joško Gvardiol',  'THE FUTURE',         5, 'DEF','🇭🇷',86,'DEF',87,'PAC',83,'STR',82,false,21,'Man City'),
((select id from t),'Borna Sosa',      'STUTTGART BLADE',    3, 'DEF','🇭🇷',81,'PAC',83,'DEF',79,'DRB',80,false,25,'Ajax'),
((select id from t),'Luka Modrić',     'THE MAESTRO',       10, 'MID','🇭🇷',88,'PSS',91,'DRB',87,'DEF',80,true, 38,'Real Madrid'),
((select id from t),'Marcelo Brozović','THE ENGINE',         11, 'MID','🇭🇷',85,'DEF',83,'PSS',87,'STR',80,false,30,'Al-Nassr'),
((select id from t),'Mateo Kovačić',   'STAMFORD BRIDGE',    8, 'MID','🇭🇷',85,'DRB',86,'PSS',85,'DEF',81,false,29,'Man City'),
((select id from t),'Mario Pašalić',   'ATALANTA GHOST',    19, 'MID','🇭🇷',82,'PSS',82,'FIN',80,'DEF',79,false,28,'Atalanta'),
((select id from t),'Andrej Kramarić', 'HOFFENHEIM KNIFE',   9, 'FWD','🇭🇷',83,'FIN',86,'DRB',80,'PAC',78,false,32,'Hoffenheim'),
((select id from t),'Ivan Perišić',    'THE WINGER',        14, 'FWD','🇭🇷',84,'PAC',83,'FIN',81,'DRB',83,false,34,'Hajduk Split'),
((select id from t),'Bruno Petković',  'THE BULL',          16, 'FWD','🇭🇷',80,'FIN',81,'STR',83,'HED',82,false,29,'Dinamo Zagreb'),
((select id from t),'Nikola Vlašić',   'RISING EAGLE',      15, 'FWD','🇭🇷',82,'DRB',83,'FIN',81,'PAC',80,false,26,'Torino');

-- ════ MOROCCO SQUAD ════
with t as (select id from teams where name='Morocco')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Yassine Bounou',  'BONO FORTRESS',      1, 'GK', '🇲🇦',88,'REF',90,'CMD',85,'HAN',87,false,32,'Al-Hilal'),
((select id from t),'Munir Mohamedi', 'ATLAS KEEPER',       12, 'GK', '🇲🇦',79,'REF',80,'CMD',78,'HAN',79,false,32,'Nantes'),
((select id from t),'Achraf Hakimi',  'THE BULLET',          2, 'DEF','🇲🇦',87,'PAC',93,'DEF',82,'DRB',85,true, 24,'PSG'),
((select id from t),'Nayef Aguerd',   'WEST HAM ROCK',       5, 'DEF','🇲🇦',83,'DEF',86,'STR',82,'PAC',79,false,27,'West Ham'),
((select id from t),'Romain Saïss',   'THE CAPTAIN',         3, 'DEF','🇲🇦',82,'DEF',85,'STR',83,'HED',84,false,33,'Besiktas'),
((select id from t),'Noussair Mazraoui','ATLAS BLADE',        6, 'DEF','🇲🇦',83,'DEF',82,'PAC',84,'DRB',80,false,25,'Bayern Munich'),
((select id from t),'Azzedine Ounahi','ANGERS MAESTRO',      8, 'MID','🇲🇦',82,'PSS',83,'DEF',80,'DRB',81,false,23,'Marseille'),
((select id from t),'Selim Amallah',  'SILENT LION',        16, 'MID','🇲🇦',80,'DEF',81,'PSS',80,'STR',79,false,26,'Standard Liège'),
((select id from t),'Sofyan Amrabat', 'THE DESTROYER',       4, 'MID','🇲🇦',84,'DEF',88,'STR',82,'PAC',78,false,27,'Fiorentina'),
((select id from t),'Hakim Ziyech',   'THE WIZARD',         10, 'MID','🇲🇦',84,'DRB',86,'PSS',86,'FIN',80,false,30,'Galatasaray'),
((select id from t),'Youssef En-Nesyri','ATLAS STRIKER',     9, 'FWD','🇲🇦',83,'FIN',85,'HED',88,'STR',80,false,26,'Sevilla'),
((select id from t),'Sofiane Boufal', 'THE DRIBBLER',       11, 'FWD','🇲🇦',82,'DRB',88,'PAC',82,'FIN',78,false,30,'Angers'),
((select id from t),'Abdessamad Ezzalzouli','BARCA GHOST',  19, 'FWD','🇲🇦',80,'PAC',86,'DRB',83,'FIN',76,false,21,'Osasuna'),
((select id from t),'Walid Cheddira', 'PARMA WEAPON',       17, 'FWD','🇲🇦',79,'FIN',81,'STR',80,'PAC',78,false,24,'Parma');

-- ════ COLOMBIA SQUAD ════
with t as (select id from teams where name='Colombia')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'David Ospina',    'THE CONDOR',         1, 'GK', '🇨🇴',83,'REF',84,'CMD',82,'HAN',82,false,35,'Al-Qadsiah'),
((select id from t),'Camilo Vargas',   'AMERICA KEEP',      12, 'GK', '🇨🇴',79,'REF',80,'CMD',78,'HAN',79,false,32,'America de Cali'),
((select id from t),'Santiago Arias',  'TIGER RIGHT',        2, 'DEF','🇨🇴',80,'DEF',81,'PAC',82,'PSS',77,false,31,'Atletico Mineiro'),
((select id from t),'Yerry Mina',      'THE GIANT',          4, 'DEF','🇨🇴',82,'DEF',83,'STR',90,'HED',91,false,28,'Everton'),
((select id from t),'Davinson Sánchez','SPURS SHIELD',       3, 'DEF','🇨🇴',84,'DEF',86,'STR',84,'PAC',80,false,27,'Galatasaray'),
((select id from t),'Johan Mojica',    'GIRONA BLADE',       5, 'DEF','🇨🇴',80,'DEF',80,'PAC',83,'DRB',78,false,31,'Girona'),
((select id from t),'Wilmar Barrios',  'THE ANCHOR',         6, 'MID','🇨🇴',82,'DEF',85,'STR',80,'PAC',76,false,30,'Zenit'),
((select id from t),'Mateus Uribe',    'PORTO ENGINE',       8, 'MID','🇨🇴',82,'DEF',82,'PSS',81,'FIN',79,false,31,'Porto'),
((select id from t),'James Rodríguez', 'THE GOLDEN KID',    10, 'MID','🇨🇴',84,'PSS',90,'DRB',84,'FIN',80,false,32,'Rayo Vallecano'),
((select id from t),'Luis Díaz',       'THE HURRICANE',     11, 'FWD','🇨🇴',85,'PAC',92,'DRB',88,'FIN',80,false,26,'Liverpool'),
((select id from t),'Radamel Falcao',  'EL TIGRE',           9, 'FWD','🇨🇴',82,'FIN',87,'STR',82,'HED',83,true, 37,'Rayo Vallecano'),
((select id from t),'Jhon Córdoba',    'KRASNODAR BULL',    19, 'FWD','🇨🇴',80,'FIN',81,'STR',86,'HED',84,false,29,'Krasnodar'),
((select id from t),'Rafael Santos Borré','FRANKFURT BLADE',17,'FWD','🇨🇴',81,'FIN',82,'PAC',82,'STR',80,false,27,'Eintracht Frankfurt');

-- ════ SENEGAL SQUAD ════
with t as (select id from teams where name='Senegal')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Edouard Mendy',   'LION KEEPER',        1, 'GK', '🇸🇳',85,'REF',87,'CMD',83,'HAN',84,false,31,'Chelsea'),
((select id from t),'Alfred Gomis',    'RENNES KEEP',       12, 'GK', '🇸🇳',80,'REF',81,'CMD',79,'HAN',80,false,30,'Rennes'),
((select id from t),'Bouna Sarr',      'BAYERN BLADE',       2, 'DEF','🇸🇳',80,'DEF',80,'PAC',83,'DRB',78,false,30,'Bayern Munich'),
((select id from t),'Kalidou Koulibaly','THE GENERAL',       3, 'DEF','🇸🇳',87,'DEF',90,'STR',88,'PAC',80,true, 31,'Al-Hilal'),
((select id from t),'Abdou Diallo',    'TERANGA SHIELD',     4, 'DEF','🇸🇳',82,'DEF',84,'STR',82,'PAC',80,false,27,'Leipzig'),
((select id from t),'Fodé Ballo-Touré','MILAN BLADE',        5, 'DEF','🇸🇳',80,'DEF',79,'PAC',84,'DRB',79,false,26,'AC Milan'),
((select id from t),'Cheikhou Kouyaté','IRON HEART',         8, 'MID','🇸🇳',82,'DEF',83,'STR',82,'PSS',77,false,33,'Nottingham Forest'),
((select id from t),'Idrissa Gana Gueye','TERANGA ENGINE',   6, 'MID','🇸🇳',83,'DEF',86,'STR',80,'PAC',78,false,33,'Everton'),
((select id from t),'Nampalys Mendy',  'NICE CONTROL',      15, 'MID','🇸🇳',79,'DEF',81,'PSS',78,'PAC',76,false,31,'Nice'),
((select id from t),'Ismaïla Sarr',    'WATFORD ROCKET',    17, 'FWD','🇸🇳',83,'PAC',93,'DRB',83,'FIN',78,false,25,'Crystal Palace'),
((select id from t),'Sadio Mané',      'THE LION KING',      10,'FWD','🇸🇳',87,'PAC',90,'DRB',87,'FIN',86,false,31,'Al-Nassr'),
((select id from t),'Bamba Dieng',     'MARSEILLE BOMB',    19, 'FWD','🇸🇳',79,'PAC',88,'FIN',77,'DRB',79,false,22,'Marseille'),
((select id from t),'Nicolas Jackson', 'CHELSEA LION',      20, 'FWD','🇸🇳',81,'PAC',87,'FIN',80,'DRB',80,false,22,'Chelsea');

-- ════ USA SQUAD ════
with t as (select id from teams where name='USA')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Matt Turner',     'NEW ENGLAND WALL',   1, 'GK', '🇺🇸',80,'REF',82,'CMD',79,'HAN',80,false,28,'Arsenal'),
((select id from t),'Ethan Horvath',   'LUTON KEEP',        12, 'GK', '🇺🇸',77,'REF',78,'CMD',76,'HAN',77,false,27,'Luton Town'),
((select id from t),'Sergino Dest',    'AMERICAN BLADE',     2, 'DEF','🇺🇸',81,'PAC',87,'DRB',82,'DEF',78,false,22,'PSV'),
((select id from t),'Miles Robinson',  'ATLANTA ROCK',       4, 'DEF','🇺🇸',79,'DEF',81,'STR',80,'PAC',79,false,26,'Atlanta United'),
((select id from t),'Tim Ream',        'THE VETERAN',        5, 'DEF','🇺🇸',78,'DEF',80,'STR',78,'HED',79,true, 35,'Fulham'),
((select id from t),'Antonee Robinson','FULHAM LIGHTNING',   3, 'DEF','🇺🇸',81,'PAC',88,'DEF',78,'DRB',80,false,25,'Fulham'),
((select id from t),'Weston McKennie', 'COWBOY BOOTS',       8, 'MID','🇺🇸',82,'DEF',81,'STR',82,'PAC',80,false,24,'Juventus'),
((select id from t),'Tyler Adams',     'THE GENERAL',        4, 'MID','🇺🇸',81,'DEF',83,'PSS',79,'PAC',80,false,24,'Leeds United'),
((select id from t),'Yunus Musah',     'VALENCIA MAESTRO',  6, 'MID','🇺🇸',80,'DRB',82,'DEF',79,'PAC',81,false,20,'Valencia'),
((select id from t),'Giovanni Reyna',  'THE PRODIGY',       7, 'MID','🇺🇸',81,'DRB',84,'PSS',83,'FIN',78,false,20,'Dortmund'),
((select id from t),'Christian Pulisic','CAPTAIN AMERICA',  10, 'FWD','🇺🇸',83,'DRB',85,'PAC',84,'FIN',80,false,24,'AC Milan'),
((select id from t),'Josh Sargent',    'NORWICH BULLET',    9, 'FWD','🇺🇸',79,'FIN',80,'PAC',82,'STR',79,false,22,'Norwich City'),
((select id from t),'Ricardo Pepi',    'RISING STAR',       19, 'FWD','🇺🇸',79,'FIN',80,'PAC',83,'STR',78,false,20,'Groningen');

-- ════ SWITZERLAND SQUAD ════
with t as (select id from teams where name='Switzerland')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Yann Sommer',     'BAVARIAN ROCK',      1, 'GK', '🇨🇭',86,'REF',88,'CMD',84,'HAN',85,false,34,'Inter Milan'),
((select id from t),'Jonas Omlin',     'SWISS KEEP',        12, 'GK', '🇨🇭',81,'REF',83,'CMD',79,'HAN',81,false,29,'Monaco'),
((select id from t),'Silvan Widmer',   'ALPINE RIGHT',       2, 'DEF','🇨🇭',80,'DEF',80,'PAC',82,'PSS',77,false,30,'Mainz'),
((select id from t),'Nico Elvedi',     'GLADBACH WALL',      5, 'DEF','🇨🇭',82,'DEF',84,'STR',82,'PAC',79,false,26,'Gladbach'),
((select id from t),'Manuel Akanji',   'CITY FORTRESS',      4, 'DEF','🇨🇭',85,'DEF',87,'STR',84,'PAC',80,false,27,'Man City'),
((select id from t),'Ricardo Rodriguez','TORINO BLADE',      3, 'DEF','🇨🇭',81,'DEF',80,'PAC',80,'PSS',79,true, 30,'Torino'),
((select id from t),'Remo Freuler',    'ATALANTA ENGINE',    8, 'MID','🇨🇭',82,'DEF',82,'PSS',81,'STR',79,false,30,'Nottingham Forest'),
((select id from t),'Granit Xhaka',    'ARSENAL WARRIOR',    10,'MID','🇨🇭',84,'DEF',85,'PSS',83,'STR',81,false,30,'Bayer Leverkusen'),
((select id from t),'Denis Zakaria',   'JUVE ENGINE',        6, 'MID','🇨🇭',82,'DEF',83,'STR',82,'PAC',79,false,26,'Juventus'),
((select id from t),'Xherdan Shaqiri', 'THE WIZARD',        11, 'FWD','🇨🇭',83,'DRB',85,'FIN',82,'PAC',80,false,31,'Chicago Fire'),
((select id from t),'Breel Embolo',    'SWISS TORPEDO',      9, 'FWD','🇨🇭',82,'PAC',85,'FIN',81,'STR',82,false,25,'Monaco'),
((select id from t),'Haris Seferović', 'LISBON LION',       23, 'FWD','🇨🇭',79,'FIN',81,'STR',82,'HED',82,false,31,'Benfica'),
((select id from t),'Fabian Rieder',   'RISING STAR',       17, 'MID','🇨🇭',79,'PSS',81,'DRB',79,'PAC',78,false,21,'Rennes');

-- Remaining 17 teams get streamlined squads (11 key players each)
-- ════ DENMARK ════
with t as (select id from teams where name='Denmark')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Kasper Schmeichel','DANISH WALL',       1, 'GK', '🇩🇰',85,'REF',86,'CMD',84,'HAN',84,false,36,'Anderlecht'),
((select id from t),'Joachim Andersen','THE ENFORCER',       4, 'DEF','🇩🇰',83,'DEF',85,'STR',83,'PAC',79,false,27,'Crystal Palace'),
((select id from t),'Simon Kjær',      'THE CAPTAIN',        5, 'DEF','🇩🇰',83,'DEF',85,'STR',82,'HED',84,true, 33,'AC Milan'),
((select id from t),'Joakim Mæhle',    'ATALANTA BLADE',     2, 'DEF','🇩🇰',81,'PAC',84,'DEF',79,'DRB',79,false,26,'Atalanta'),
((select id from t),'Pierre-Emile Højbjerg','THE ENGINE',    8, 'MID','🇩🇰',84,'DEF',84,'PSS',82,'STR',81,false,27,'Tottenham'),
((select id from t),'Thomas Delaney',  'THE WARRIOR',        6, 'MID','🇩🇰',82,'DEF',83,'STR',80,'PSS',79,false,31,'Sevilla'),
((select id from t),'Christian Eriksen','THE MAESTRO',       10,'MID','🇩🇰',86,'PSS',91,'DRB',84,'FIN',80,false,31,'Man United'),
((select id from t),'Mikkel Damsgaard','THE PRODIGY',        7, 'MID','🇩🇰',81,'DRB',83,'PAC',82,'FIN',78,false,22,'Brentford'),
((select id from t),'Martin Braithwaite','THE VETERAN',      9, 'FWD','🇩🇰',80,'FIN',81,'PAC',79,'STR',80,false,31,'Espanyol'),
((select id from t),'Kasper Dolberg',  'NICE STRIKER',      19, 'FWD','🇩🇰',80,'FIN',82,'STR',80,'PAC',78,false,25,'Nice'),
((select id from t),'Jesper Lindstrøm','EINTRACHT BULLET',  11, 'FWD','🇩🇰',80,'PAC',87,'DRB',80,'FIN',76,false,22,'Eintracht Frankfurt');

-- ════ SOUTH KOREA ════
with t as (select id from teams where name='South Korea')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Kim Seung-gyu',   'TAEGEUK KEEP',       1, 'GK', '🇰🇷',80,'REF',82,'CMD',79,'HAN',80,false,36,'Vissel Kobe'),
((select id from t),'Kim Min-jae',     'THE MONSTER',        3, 'DEF','🇰🇷',86,'DEF',89,'STR',88,'PAC',80,true, 26,'Bayern Munich'),
((select id from t),'Kim Young-gwon',  'IRON SHIELD',        4, 'DEF','🇰🇷',80,'DEF',82,'STR',80,'HED',82,false,33,'Ulsan'),
((select id from t),'Lee Ki-je',       'WARRIOR BACK',       2, 'DEF','🇰🇷',78,'DEF',79,'PAC',80,'PSS',75,false,29,'Jeonbuk'),
((select id from t),'Hwang In-beom',   'ENGINE ROOM',        6, 'MID','🇰🇷',80,'DEF',81,'PSS',80,'PAC',79,false,26,'Feyenoord'),
((select id from t),'Jung Woo-young',  'THE ANCHOR',         8, 'MID','🇰🇷',79,'DEF',82,'STR',78,'PSS',76,false,33,'Al-Qadsiah'),
((select id from t),'Lee Jae-sung',    'THE CONDUCTOR',     10, 'MID','🇰🇷',80,'PSS',82,'DEF',78,'FIN',78,false,30,'Mainz'),
((select id from t),'Kwon Chang-hoon', 'THE WIZARD',        11, 'MID','🇰🇷',79,'DRB',81,'PSS',80,'FIN',77,false,28,'Gimcheon'),
((select id from t),'Son Heung-min',   'THE SON',            7, 'FWD','🇰🇷',87,'PAC',88,'FIN',87,'DRB',85,false,31,'Tottenham'),
((select id from t),'Hwang Hee-chan',  'WOLVES BULLET',      9, 'FWD','🇰🇷',82,'PAC',90,'FIN',80,'DRB',80,false,27,'Wolves'),
((select id from t),'Cho Gue-sung',    'RISING STAR',       19, 'FWD','🇰🇷',79,'FIN',80,'STR',80,'HED',81,false,24,'Jeonbuk');

-- Bulk insert remaining teams with representative squads
with t as (select id from teams where name='Mexico')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Guillermo Ochoa',  'MACHINE KEEPER',   1, 'GK', '🇲🇽',83,'REF',85,'CMD',81,'HAN',82,true, 37,'Salernitana'),
((select id from t),'Hector Moreno',    'EL PILAR',         3, 'DEF','🇲🇽',80,'DEF',82,'STR',82,'HED',81,false,35,'Rayados'),
((select id from t),'César Montes',     'RAYADOS WALL',     4, 'DEF','🇲🇽',80,'DEF',82,'STR',81,'PAC',78,false,25,'Espanyol'),
((select id from t),'Jorge Sánchez',    'AJAX BLADE',       2, 'DEF','🇲🇽',79,'DEF',79,'PAC',82,'DRB',78,false,24,'Ajax'),
((select id from t),'Hector Herrera',   'THE WARRIOR',      6, 'MID','🇲🇽',82,'DEF',82,'PSS',81,'STR',80,false,33,'Houston Dynamo'),
((select id from t),'Edson Álvarez',    'THE ANCHOR',       8, 'MID','🇲🇽',84,'DEF',87,'STR',82,'PAC',77,false,25,'West Ham'),
((select id from t),'Orbelín Pineda',   'THE MAGICIAN',    10, 'MID','🇲🇽',80,'DRB',83,'PSS',80,'FIN',78,false,26,'AEK Athens'),
((select id from t),'Chucky Lozano',    'EL CHUCKY',       22, 'FWD','🇲🇽',83,'PAC',90,'DRB',83,'FIN',79,false,28,'PSV'),
((select id from t),'Raul Jimenez',     'THE WOLF',         9, 'FWD','🇲🇽',83,'FIN',84,'STR',82,'HED',83,false,31,'Fulham'),
((select id from t),'Henry Martin',     'AMERICA STRIKE',  19, 'FWD','🇲🇽',79,'FIN',80,'STR',80,'PAC',76,false,30,'Club America'),
((select id from t),'Alexis Vega',      'CHIVAS ROCKET',   11, 'FWD','🇲🇽',79,'PAC',84,'DRB',80,'FIN',76,false,26,'Chivas');

with t as (select id from teams where name='Canada')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Milan Borjan',     'MAPLE WALL',       1, 'GK', '🇨🇦',81,'REF',83,'CMD',79,'HAN',80,true, 35,'Red Star Belgrade'),
((select id from t),'Alistair Johnston','CELTIC BLADE',     2, 'DEF','🇨🇦',79,'DEF',79,'PAC',82,'PSS',76,false,24,'Celtic'),
((select id from t),'Steven Vitoria',   'MAPLE SHIELD',     4, 'DEF','🇨🇦',79,'DEF',81,'STR',80,'HED',80,false,33,'Moreirense'),
((select id from t),'Kamal Miller',     'NY WALL',          5, 'DEF','🇨🇦',79,'DEF',80,'STR',79,'PAC',78,false,26,'NYCFC'),
((select id from t),'Samuel Piette',    'THE ENGINE',       6, 'MID','🇨🇦',78,'DEF',81,'STR',78,'PSS',76,false,28,'CF Montreal'),
((select id from t),'Jonathan Osorio',  'TFC MAESTRO',      8, 'MID','🇨🇦',79,'DEF',79,'PSS',80,'FIN',77,false,30,'Toronto FC'),
((select id from t),'Atiba Hutchinson', 'THE LEGEND',      10, 'MID','🇨🇦',78,'PSS',80,'DEF',77,'STR',76,false,39,'Besiktas'),
((select id from t),'Alphonso Davies',  'THE HURRICANE',   19, 'FWD','🇨🇦',86,'PAC',97,'DRB',86,'DEF',82,false,22,'Bayern Munich'),
((select id from t),'Jonathan David',   'LILLE MACHINE',    9, 'FWD','🇨🇦',84,'FIN',87,'PAC',84,'DRB',80,false,23,'Lille'),
((select id from t),'Tajon Buchanan',   'INTER BULLET',    11, 'FWD','🇨🇦',80,'PAC',89,'DRB',81,'FIN',75,false,23,'Club Brugge'),
((select id from t),'Cyle Larin',       'MAPLE STRIKER',   17, 'FWD','🇨🇦',80,'FIN',81,'STR',80,'PAC',79,false,27,'Besiktas');

with t as (select id from teams where name='Poland')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Wojciech Szczęsny','JUVENTUS FORTRESS', 1, 'GK', '🇵🇱',86,'REF',87,'CMD',84,'HAN',85,false,32,'Juventus'),
((select id from t),'Matty Cash',       'VILLA BLADE',       2, 'DEF','🇵🇱',81,'DEF',81,'PAC',83,'STR',79,false,25,'Aston Villa'),
((select id from t),'Jan Bednarek',     'EAGLE SHIELD',      4, 'DEF','🇵🇱',82,'DEF',84,'STR',82,'PAC',79,false,26,'Southampton'),
((select id from t),'Kamil Glik',       'IRON EAGLE',        5, 'DEF','🇵🇱',81,'DEF',84,'STR',84,'HED',85,true, 35,'Benevento'),
((select id from t),'Bartosz Bereszyński','RAPID BLADE',     3, 'DEF','🇵🇱',79,'DEF',79,'PAC',80,'PSS',75,false,30,'Napoli'),
((select id from t),'Grzegorz Krychowiak','THE DESTROYER',   6, 'MID','🇵🇱',82,'DEF',84,'STR',80,'PSS',78,false,33,'Al-Qadsiah'),
((select id from t),'Mateusz Klich',    'BIELSA MACHINE',    8, 'MID','🇵🇱',80,'PSS',82,'DEF',78,'FIN',77,false,32,'DC United'),
((select id from t),'Piotr Zieliński', 'NAPOLI MAESTRO',    10, 'MID','🇵🇱',85,'PSS',88,'DRB',83,'FIN',80,false,28,'Napoli'),
((select id from t),'Karol Świderski',  'CHARLOTTE BLADE',  19, 'FWD','🇵🇱',79,'FIN',80,'PAC',82,'STR',79,false,26,'Charlotte FC'),
((select id from t),'Krzysztof Piątek','THE ASSASSIN',       9, 'FWD','🇵🇱',80,'FIN',82,'STR',80,'PAC',78,false,27,'Salernitana'),
((select id from t),'Robert Lewandowski','THE MACHINE',      7, 'FWD','🇵🇱',91,'FIN',94,'STR',85,'HED',87,false,34,'Barcelona');

with t as (select id from teams where name='Serbia')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Vanja Milinković-Savić','TORINO WALL',  1, 'GK', '🇷🇸',82,'REF',83,'CMD',81,'HAN',81,false,26,'Torino'),
((select id from t),'Strahinja Pavlović','SALZBURG ROCK',    4, 'DEF','🇷🇸',82,'DEF',84,'STR',82,'PAC',79,false,21,'RB Salzburg'),
((select id from t),'Nikola Milenković', 'FIORENTINA WALL',  5, 'DEF','🇷🇸',82,'DEF',83,'STR',83,'HED',84,false,25,'Fiorentina'),
((select id from t),'Filip Mladenović', 'STURM BLADE',       3, 'DEF','🇷🇸',79,'DEF',79,'PAC',80,'DRB',77,false,31,'Sturm Graz'),
((select id from t),'Nemanja Gudelj',   'SEVILLA ENGINE',    6, 'MID','🇷🇸',81,'DEF',83,'STR',80,'PSS',78,false,31,'Sevilla'),
((select id from t),'Sergej Milinković-Savić','THE GIANT',   8, 'MID','🇷🇸',86,'STR',84,'PSS',86,'FIN',80,true, 28,'Al-Hilal'),
((select id from t),'Nemanja Maksimović','GETAFE WARRIOR',  14, 'MID','🇷🇸',80,'DEF',82,'STR',79,'PSS',77,false,27,'Getafe'),
((select id from t),'Filip Kostić',     'FRANKFURT KING',   11, 'MID','🇷🇸',83,'DRB',82,'PAC',83,'PSS',81,false,29,'Juventus'),
((select id from t),'Aleksandar Mitrović','THE MACHINE',     9, 'FWD','🇷🇸',86,'FIN',88,'STR',88,'HED',90,false,28,'Al-Hilal'),
((select id from t),'Dušan Vlahović',   'THE FUTURE',       10, 'FWD','🇷🇸',86,'FIN',88,'STR',84,'PAC',80,false,23,'Juventus'),
((select id from t),'Luka Jović',       'MADRID GHOST',     17, 'FWD','🇷🇸',80,'FIN',82,'STR',80,'PAC',78,false,25,'AC Milan');

-- Streamlined 11-player squads for remaining teams
with t as (select id from teams where name='Australia')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Mat Ryan',        'SOCCEROO WALL',     1, 'GK', '🇦🇺',80,'REF',81,'CMD',79,'HAN',80,true, 31,'Real Sociedad'),
((select id from t),'Milos Degenek',   'RED STAR ROCK',     3, 'DEF','🇦🇺',78,'DEF',80,'STR',78,'PAC',77,false,28,'Red Star Belgrade'),
((select id from t),'Harry Souttar',   'STOKE GIANT',       4, 'DEF','🇦🇺',79,'DEF',80,'STR',82,'HED',83,false,24,'Stoke City'),
((select id from t),'Aziz Behich',     'ISTANBUL BLADE',    5, 'DEF','🇦🇺',77,'DEF',77,'PAC',79,'DRB',76,false,31,'Dundee United'),
((select id from t),'Aaron Mooy',      'CELTIC ENGINE',     8, 'MID','🇦🇺',80,'PSS',82,'DEF',78,'FIN',76,false,32,'Celtic'),
((select id from t),'Jackson Irvine',  'ST PAULI WARRIOR',  6, 'MID','🇦🇺',79,'DEF',80,'STR',79,'PSS',77,false,29,'St. Pauli'),
((select id from t),'Riley McGree',    'CELTIC MAESTRO',   10, 'MID','🇦🇺',79,'PSS',80,'DRB',79,'FIN',77,false,24,'Celtic'),
((select id from t),'Mathew Leckie',   'HERTHA BULLET',    11, 'FWD','🇦🇺',79,'PAC',85,'DRB',78,'FIN',75,false,32,'Melbourne City'),
((select id from t),'Martin Boyle',    'HIBS ROCKET',      17, 'FWD','🇦🇺',78,'PAC',86,'DRB',77,'FIN',73,false,29,'Hibernian'),
((select id from t),'Mitchell Duke',   'SOCCEROO BULL',     9, 'FWD','🇦🇺',76,'FIN',77,'STR',80,'HED',81,false,31,'Fagiano Okayama'),
((select id from t),'Jamie Maclaren',  'MELBOURNE MACHINE',19, 'FWD','🇦🇺',77,'FIN',79,'PAC',78,'STR',76,false,29,'Melbourne City');

with t as (select id from teams where name='Ecuador')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Hernán Galíndez', 'AUCAS KEEP',        1, 'GK', '🇪🇨',79,'REF',80,'CMD',78,'HAN',79,false,35,'Aucas'),
((select id from t),'Byron Castillo',  'LIGA BLADE',        3, 'DEF','🇪🇨',78,'DEF',78,'PAC',80,'DRB',77,false,24,'Liga de Quito'),
((select id from t),'Piero Hincapié',  'LEVERKUSEN ROCK',   4, 'DEF','🇪🇨',82,'DEF',83,'STR',81,'PAC',80,false,21,'Bayer Leverkusen'),
((select id from t),'William Pacho',   'EINTRACHT WALL',    5, 'DEF','🇪🇨',80,'DEF',82,'STR',80,'PAC',79,false,21,'Eintracht Frankfurt'),
((select id from t),'Moises Caicedo',  'THE DESTROYER',     8, 'MID','🇪🇨',84,'DEF',86,'STR',82,'PAC',80,false,21,'Brighton'),
((select id from t),'Carlos Gruezo',   'AUGSBURG ENGINE',   6, 'MID','🇪🇨',79,'DEF',81,'STR',78,'PSS',76,false,28,'Augsburg'),
((select id from t),'Romario Ibarra',  'PACHUCA ROCKET',   11, 'FWD','🇪🇨',79,'PAC',85,'DRB',79,'FIN',75,false,28,'Pachuca'),
((select id from t),'Gonzalo Plata',   'SPORTING BLADE',   17, 'FWD','🇪🇨',79,'PAC',85,'DRB',80,'FIN',75,false,22,'Sporting CP'),
((select id from t),'Enner Valencia',  'EL BOMBER',         9, 'FWD','🇪🇨',80,'FIN',81,'STR',80,'HED',79,true, 33,'Fenerbahçe'),
((select id from t),'Michael Estrada', 'MLS STRIKER',      19, 'FWD','🇪🇨',77,'FIN',78,'STR',79,'PAC',76,false,26,'Cruz Azul'),
((select id from t),'Jeremy Sarmiento','BRIGHTON GHOST',   10, 'MID','🇪🇨',78,'DRB',81,'PAC',80,'FIN',74,false,20,'Brighton');

with t as (select id from teams where name='Chile')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Claudio Bravo',   'THE LEGEND',        1, 'GK', '🇨🇱',80,'REF',81,'CMD',82,'HAN',79,true, 40,'Real Betis'),
((select id from t),'Mauricio Isla',   'THE VETERAN',       2, 'DEF','🇨🇱',78,'DEF',78,'PAC',79,'PSS',76,false,34,'Flamengo'),
((select id from t),'Gary Medel',      'THE PITBULL',       4, 'DEF','🇨🇱',80,'DEF',82,'STR',82,'PAC',77,false,35,'Bologna'),
((select id from t),'Guillermo Maripan','MONACO ROCK',       5, 'DEF','🇨🇱',81,'DEF',83,'STR',81,'PAC',79,false,27,'Monaco'),
((select id from t),'Charles Aránguiz','LEVERKUSEN BRAIN',  8, 'MID','🇨🇱',82,'DEF',81,'PSS',82,'STR',79,false,33,'Bayer Leverkusen'),
((select id from t),'Erick Pulgar',    'FIORENTINA ENGINE', 6, 'MID','🇨🇱',80,'DEF',80,'PSS',80,'FIN',77,false,28,'Fiorentina'),
((select id from t),'Diego Valdés',    'ATLAS MAESTRO',    10, 'MID','🇨🇱',79,'PSS',81,'DRB',79,'FIN',77,false,28,'Atlas'),
((select id from t),'Alexis Sánchez',  'THE NINO MARAVILLA',7, 'FWD','🇨🇱',82,'DRB',83,'FIN',82,'PAC',79,false,34,'Inter Milan'),
((select id from t),'Ben Brereton Díaz','BLACKBURN BULL',   9, 'FWD','🇨🇱',79,'FIN',80,'STR',81,'PAC',78,false,22,'Blackburn'),
((select id from t),'Eduardo Vargas',  'EL TURBOMAN',      11, 'FWD','🇨🇱',79,'FIN',80,'PAC',79,'STR',79,false,33,'Atletico Mineiro'),
((select id from t),'Felipe Mora',     'PORTLAND STRIKER',  9, 'FWD','🇨🇱',77,'FIN',78,'STR',79,'PAC',76,false,29,'Portland Timbers');

with t as (select id from teams where name='Iran')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Alireza Beiranvand','PERSIAN FORTRESS', 1, 'GK', '🇮🇷',79,'REF',81,'CMD',78,'HAN',79,false,30,'Persepolis'),
((select id from t),'Sadegh Moharrami','TEHERAN BLADE',     2, 'DEF','🇮🇷',77,'DEF',78,'PAC',79,'PSS',74,false,27,'Dinamo Zagreb'),
((select id from t),'Majid Hosseini',  'TRABZON ROCK',      4, 'DEF','🇮🇷',78,'DEF',80,'STR',79,'PAC',77,false,25,'Trabzonspor'),
((select id from t),'Morteza Pouraliganji','PERSIAN SHIELD', 5,'DEF','🇮🇷',77,'DEF',79,'STR',79,'HED',79,true, 30,'Al-Sailiya'),
((select id from t),'Ali Karimi',      'THE WIZARD',        8, 'MID','🇮🇷',78,'DRB',80,'PSS',79,'FIN',75,false,23,'Bayern Munich'),
((select id from t),'Saeid Ezatolahi', 'PERSIAN ENGINE',    6, 'MID','🇮🇷',78,'DEF',80,'STR',77,'PSS',77,false,26,'Cercle Brugge'),
((select id from t),'Ahmad Nourollahi','RUBIN ENGINE',      14, 'MID','🇮🇷',77,'DEF',79,'PSS',77,'STR',76,false,28,'Rubin Kazan'),
((select id from t),'Mehdi Taremi',    'PORTO DANGER',      9, 'FWD','🇮🇷',83,'FIN',85,'STR',82,'HED',83,false,30,'Inter Milan'),
((select id from t),'Sardar Azmoun',   'THE RUSSIAN MESSI',11, 'FWD','🇮🇷',82,'FIN',83,'PAC',80,'DRB',80,false,28,'Bayer Leverkusen'),
((select id from t),'Allahyar Sayyadmanesh','FENERBAHCE GHOST',17,'FWD','🇮🇷',78,'PAC',83,'DRB',79,'FIN',74,false,22,'Fenerbahçe'),
((select id from t),'Karim Ansarifard','THE VETERAN',       10, 'FWD','🇮🇷',76,'FIN',77,'STR',78,'HED',78,false,34,'Nottingham Forest');

with t as (select id from teams where name='Wales')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Wayne Hennessey','DRAGON WALL',         1, 'GK', '🏴󠁧󠁢󠁷󠁬󠁳󠁿',80,'REF',81,'CMD',80,'HAN',79,false,36,'Nottingham Forest'),
((select id from t),'Connor Roberts', 'BURNLEY BLADE',      2, 'DEF','🏴󠁧󠁢󠁷󠁬󠁳󠁿',78,'DEF',78,'PAC',81,'PSS',75,false,27,'Burnley'),
((select id from t),'Chris Mepham',   'DRAGON SHIELD',      4, 'DEF','🏴󠁧󠁢󠁷󠁬󠁳󠁿',78,'DEF',80,'STR',79,'HED',79,false,25,'Bournemouth'),
((select id from t),'Ben Davies',     'SPURS ROCK',          3, 'DEF','🏴󠁧󠁢󠁷󠁬󠁳󠁿',80,'DEF',81,'STR',79,'PSS',77,true, 30,'Tottenham'),
((select id from t),'Joe Allen',      'THE WARRIOR',        8, 'MID','🏴󠁧󠁢󠁷󠁬󠁳󠁿',78,'DEF',78,'PSS',79,'STR',77,false,32,'Stoke City'),
((select id from t),'Aaron Ramsey',   'THE LEGEND',        10, 'MID','🏴󠁧󠁢󠁷󠁬󠁳󠁿',79,'PSS',81,'DRB',79,'FIN',77,false,32,'Nice'),
((select id from t),'Dylan Levitt',   'MAN UTD GHOST',      6, 'MID','🏴󠁧󠁢󠁷󠁬󠁳󠁿',77,'PSS',78,'DEF',76,'PAC',77,false,22,'Man United'),
((select id from t),'Gareth Bale',    'THE DRAGON',         11,'FWD','🏴󠁧󠁢󠁷󠁬󠁳󠁿',82,'PAC',83,'FIN',83,'DRB',80,false,33,'Retired'),
((select id from t),'Kieffer Moore',  'THE GIANT',          9, 'FWD','🏴󠁧󠁢󠁷󠁬󠁳󠁿',79,'FIN',79,'STR',86,'HED',88,false,30,'Bournemouth'),
((select id from t),'Daniel James',   'LEEDS ROCKET',       7, 'FWD','🏴󠁧󠁢󠁷󠁬󠁳󠁿',79,'PAC',92,'DRB',78,'FIN',74,false,25,'Leeds United'),
((select id from t),'Mark Harris',    'CARDIFF BLADE',     17, 'FWD','🏴󠁧󠁢󠁷󠁬󠁳󠁿',75,'FIN',76,'STR',77,'PAC',74,false,25,'Cardiff City');

with t as (select id from teams where name='Saudi Arabia')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Mohammed Al-Owais','GREEN FALCON KEEP', 1, 'GK', '🇸🇦',78,'REF',80,'CMD',77,'HAN',78,true, 31,'Al-Hilal'),
((select id from t),'Sultan Al-Ghannam','FALCON BLADE',     2, 'DEF','🇸🇦',76,'DEF',77,'PAC',78,'PSS',73,false,27,'Al-Nassr'),
((select id from t),'Ali Al-Bulayhi',  'FALCON SHIELD',     3, 'DEF','🇸🇦',76,'DEF',78,'STR',76,'PAC',75,false,32,'Al-Hilal'),
((select id from t),'Abdulelah Al-Amri','HILAL ROCK',        4, 'DEF','🇸🇦',76,'DEF',78,'STR',77,'HED',76,false,25,'Al-Hilal'),
((select id from t),'Sami Al-Najei',   'AHLI ENGINE',       6, 'MID','🇸🇦',76,'DEF',77,'PSS',76,'STR',75,false,30,'Al-Ahli'),
((select id from t),'Mohamed Kanno',   'HILAL WARRIOR',     8, 'MID','🇸🇦',77,'DEF',78,'STR',77,'PSS',76,false,28,'Al-Hilal'),
((select id from t),'Saleh Al-Shehri', 'THE FALCON',       11, 'FWD','🇸🇦',78,'FIN',79,'PAC',79,'STR',77,false,28,'Al-Hilal'),
((select id from t),'Firas Al-Buraikan','RISING FALCON',    9, 'FWD','🇸🇦',77,'FIN',78,'PAC',80,'DRB',76,false,23,'Al-Fateh'),
((select id from t),'Salem Al-Dawsari','AL-HILAL LEGEND',  10, 'FWD','🇸🇦',78,'DRB',80,'PAC',78,'FIN',76,false,31,'Al-Hilal'),
((select id from t),'Hattan Bahebri',  'AL-SHABAB GHOST',  17, 'FWD','🇸🇦',76,'PAC',80,'DRB',77,'FIN',73,false,28,'Al-Shabab'),
((select id from t),'Mohammed Al-Burayk','HILAL LEFT',       5, 'DEF','🇸🇦',77,'DEF',78,'PAC',79,'DRB',76,false,27,'Al-Hilal');

with t as (select id from teams where name='Ghana')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Lawrence Ati Zigi','BLACK STAR KEEP',  1, 'GK', '🇬🇭',79,'REF',80,'CMD',78,'HAN',79,false,26,'St. Gallen'),
((select id from t),'Tariq Lamptey',   'BLACK STAR BLADE',  2, 'DEF','🇬🇭',80,'PAC',88,'DEF',77,'DRB',79,false,22,'Brighton'),
((select id from t),'Daniel Amartey',  'LEICESTER SHIELD',  4, 'DEF','🇬🇭',79,'DEF',80,'STR',79,'PAC',78,false,28,'Leicester'),
((select id from t),'Alexander Djiku', 'STRASBOURG ROCK',   5, 'DEF','🇬🇭',79,'DEF',81,'STR',80,'PAC',77,true, 28,'Strasbourg'),
((select id from t),'Thomas Partey',   'THE DESTROYER',     6, 'MID','🇬🇭',84,'DEF',86,'STR',83,'PSS',79,false,29,'Arsenal'),
((select id from t),'Mohammed Kudus',  'AJAX KING',         8, 'MID','🇬🇭',82,'DRB',86,'PAC',84,'FIN',79,false,22,'Ajax'),
((select id from t),'André Ayew',      'THE LEGEND',       10, 'MID','🇬🇭',80,'DRB',80,'FIN',79,'PSS',79,false,33,'Al-Sadd'),
((select id from t),'Jordan Ayew',     'CRYSTAL BULLET',   11, 'FWD','🇬🇭',79,'PAC',82,'DRB',79,'FIN',77,false,31,'Crystal Palace'),
((select id from t),'Inaki Williams',  'ATHLETIC MACHINE',  9, 'FWD','🇬🇭',82,'PAC',91,'DRB',80,'FIN',76,false,28,'Athletic Bilbao'),
((select id from t),'Osman Bukari',    'RED STAR GHOST',   17, 'FWD','🇬🇭',78,'PAC',85,'DRB',78,'FIN',74,false,24,'Red Star Belgrade'),
((select id from t),'Antoine Semenyo', 'BRISTOL ROCKET',   19, 'FWD','🇬🇭',79,'PAC',86,'DRB',79,'FIN',75,false,23,'Bristol City');

with t as (select id from teams where name='Costa Rica')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'Keylor Navas',    'THE TICO LEGEND',   1, 'GK', '🇨🇷',84,'REF',86,'CMD',82,'HAN',83,true, 36,'PSG'),
((select id from t),'Keysher Fuller',  'TICO BLADE',        2, 'DEF','🇨🇷',77,'DEF',77,'PAC',79,'DRB',75,false,28,'Herediano'),
((select id from t),'Oscar Duarte',    'IRON TICO',         4, 'DEF','🇨🇷',78,'DEF',79,'STR',79,'HED',80,false,33,'Real Betis'),
((select id from t),'Francisco Calvo', 'TICO COMMANDER',    3, 'DEF','🇨🇷',77,'DEF',78,'STR',78,'PAC',76,false,31,'Konyaspor'),
((select id from t),'Celso Borges',    'THE ANCHOR',        6, 'MID','🇨🇷',78,'DEF',79,'PSS',78,'STR',77,false,34,'Alajuelense'),
((select id from t),'Yeltsin Tejeda',  'TICO ENGINE',       8, 'MID','🇨🇷',77,'DEF',79,'STR',77,'PAC',76,false,31,'Santos'),
((select id from t),'Bryan Ruiz',      'THE LEGEND',       10, 'MID','🇨🇷',76,'PSS',78,'DRB',76,'FIN',74,false,37,'Alajuelense'),
((select id from t),'Joel Campbell',   'TICO ROCKET',      17, 'FWD','🇨🇷',78,'PAC',83,'DRB',78,'FIN',73,false,30,'Deportivo Saprissa'),
((select id from t),'Johan Venegas',   'TICO STRIKER',      9, 'FWD','🇨🇷',76,'FIN',77,'PAC',78,'STR',76,false,32,'Herediano'),
((select id from t),'Anthony Contreras','RISING TICO',     11, 'FWD','🇨🇷',75,'FIN',76,'PAC',77,'DRB',74,false,22,'Saprissa'),
((select id from t),'Manfred Ugalde',  'SPARTA MACHINE',   19, 'FWD','🇨🇷',77,'PAC',84,'FIN',75,'DRB',77,false,21,'Sparta Rotterdam');

with t as (select id from teams where name='Cameroon')
insert into players (team_id,name,code,number,position,nationality,ovr,attr1_key,attr1_val,attr2_key,attr2_val,attr3_key,attr3_val,is_captain,age,club) values
((select id from t),'André Onana',     'LION KEEPER',       1, 'GK', '🇨🇲',86,'REF',87,'CMD',85,'HAN',85,false,26,'Inter Milan'),
((select id from t),'Collins Fai',     'LION BLADE',        2, 'DEF','🇨🇲',78,'DEF',78,'PAC',80,'PSS',74,false,31,'Al-Tai'),
((select id from t),'Nicolas Nkoulou', 'IRON LION',         4, 'DEF','🇨🇲',79,'DEF',81,'STR',80,'HED',80,true, 32,'Aris Thessaloniki'),
((select id from t),'Ambroise Oyongo', 'MONTPELLIER BACK',  3, 'DEF','🇨🇲',77,'DEF',77,'PAC',79,'DRB',76,false,31,'Montpellier'),
((select id from t),'Samuel Oum Gouet','MECHELEN ENGINE',   8, 'MID','🇨🇲',78,'DEF',79,'STR',78,'PSS',77,false,24,'Mechelen'),
((select id from t),'Martin Hongla',   'VERONA WARRIOR',    6, 'MID','🇨🇲',77,'DEF',79,'STR',77,'PAC',76,false,24,'Verona'),
((select id from t),'André-Frank Zambo Anguissa','THE DESTROYER',10,'MID','🇨🇲',84,'DEF',85,'STR',83,'PSS',78,false,27,'Napoli'),
((select id from t),'Bryan Mbeumo',    'BRENTFORD BULLET',  7, 'FWD','🇨🇲',81,'PAC',86,'DRB',81,'FIN',78,false,23,'Brentford'),
((select id from t),'Karl Toko Ekambi','LYON LION',         9, 'FWD','🇨🇲',81,'PAC',87,'DRB',80,'FIN',78,false,30,'Lyon'),
((select id from t),'Eric Maxim Choupo-Moting','THE LION',  11,'FWD','🇨🇲',80,'FIN',81,'STR',82,'PAC',76,false,33,'Bayern Munich'),
((select id from t),'Vincent Aboubakar','THE CAPTAIN',      9, 'FWD','🇨🇲',81,'FIN',82,'STR',82,'PAC',78,false,30,'Al-Nassr');
