/*

    lang-pt_BR.js

    Brazilian Portuguese translation for SNAP!

    translated by Aldo von Wangenheim, later updated by Cassiano D'Andrea

    Copyright (C) 2014 by Aldo von Wangenheim

    This file is part of Snap!.

    Snap! is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of
    the License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.



    Note to Translators:
    --------------------
    At this stage of development, Snap! can be translated to any LTR language
    maintaining the current order of inputs (formal parameters in blocks).

    Translating Snap! is easy:


    1. Download

    Download the sources and extract them into a local folder on your
    computer:

        <http://snap.berkeley.edu/snapsource/snap.zip>

    Use the German translation file (named 'lang-de.js') as template for your
    own translations. Start with editing the original file, because that way
    you will be able to immediately check the results in your browsers while
    you're working on your translation (keep the local copy of snap.html open
    in your web browser, and refresh it as you progress with your
    translation).


    2. Edit

    Edit the translation file with a regular text editor, or with your
    favorite JavaScript editor.

    In the first non-commented line (the one right below this
    note) replace "de" with the two-letter ISO 639-1 code for your language,
    e.g.

        fr - French => SnapTranslator.dict.fr = {
        it - Italian => SnapTranslator.dict.it = {
        pl - Polish => SnapTranslator.dict.pl = {
        pt - Portuguese => SnapTranslator.dict.pt = {
        es - Spanish => SnapTranslator.dict.es = {
        el - Greek => => SnapTranslator.dict.el = {

    etc. (see <http://en.wikipedia.org/wiki/ISO_639-1>)


    3. Translate

    Then work through the dictionary, replacing the German strings against
    your translations. The dictionary is a straight-forward JavaScript ad-hoc
    object, for review purposes it should be formatted as follows:

        {
            'English string':
                'Translation string',
            'last key':
        }       'last value'

    and you only edit the indented value strings. Note that each key-value
    pair needs to be delimited by a comma, but that there shouldn't be a comma
    after the last pair (again, just overwrite the template file and you'll be
    fine).

    If something doesn't work, or if you're unsure about the formalities you
    should check your file with

        <http://JSLint.com>

    This will inform you about any missed commas etc.


    4. Accented characters

    Depending on which text editor and which file encoding you use you can
    directly enter special characters (e.g. Umlaut, accented characters) on
    your keyboard. However, I've noticed that some browsers may not display
    special characters correctly, even if other browsers do. So it's best to
    check your results in several browsers. If you want to be on the safe
    side, it's even better to escape these characters using Unicode.

        see: <http://0xcc.net/jsescape/>


    5. Block specs:

    At this time your translation of block specs will only work
    correctly, if the order of formal parameters and their types
    are unchanged. Placeholders for inputs (formal parameters) are
    indicated by a preceding % prefix and followed by a type
    abbreviation.

    For example:

        'say %s for %n secs'

    can currently not be changed into

        'say %n secs long %s'

    and still work as intended.

    Similarly

        'point towards %dst'

    cannot be changed into

        'point towards %cst'

    without breaking its functionality.


    6. Submit

    When you're done, rename the edited file by replacing the "de" part of the
    filename with the two-letter ISO 639-1 code for your language, e.g.

        fr - French => lang-fr.js
        it - Italian => lang-it.js
        pl - Polish => lang-pl.js
        pt - Portuguese => lang-pt.js
        es - Spanish => lang-es.js
        el - Greek => => lang-el.js

    and send it to me for inclusion in the official Snap! distribution.
    Once your translation has been included, Your name will the shown in the
    "Translators" tab in the "About Snap!" dialog box, and you will be able to
    directly launch a translated version of Snap! in your browser by appending

        lang:xx

    to the URL, xx representing your translations two-letter code.


    7. Known issues

    In some browsers accents or ornaments located in typographic ascenders
    above the cap height are currently (partially) cut-off.

    Enjoy!
    -Jens
*/

/*global SnapTranslator*/

SnapTranslator.dict.pt_BR = {

/*
    Special characters: (see <http://0xcc.net/jsescape/>)

    ??, ??   \u00c4, \u00e4
    ??, ??   \u00d6, \u00f6
    ??, ??   \u00dc, \u00fc
    ??      \u00df
*/

    // meta informa????o sobre a tradu????o
    'language_name':
        'Portugu??s do Brasil',
    'language_translator':
        "Aldo von Wangenheim, Cassiano D'Andrea",
    'translator_e-mail':
        'awangenh@inf.ufsc.br, cassiano.dandrea@tagview.com.br',
    'last_changed':
        '2021-11-11',

    // GUI
    // control bar:
    'untitled':
        'Sem t??tulo',
    'development mode':
        'modo de desenvolvimento',

    // categorias:
    'Motion':
        'Movimento',
    'Looks':
        'Apar??ncia',
    'Sound':
        'Som',
    'Pen':
        'Caneta',
    'Control':
        'Controle',
    'Sensing':
        'Sensores',
    'Operators':
        'Operadores',
    'Variables':
        'Vari??veis',
    'Lists':
        'Listas',
    'Other':
        'Outros',

    // editor:
    'draggable':
        'arrast??vel',

    // separadores:
    'Scripts':
        'C??digo',
    'Costumes':
        'Fantasias',
    'Sounds':
        'Sons',

    // nomes:
    'Sprite':
        'ator',
    'Stage':
        'palco',

    // estilos de rota????o:
    'don\'t rotate':
        'n??o rode',
    'can rotate':
        'rode',
    'only face left/right':
        'olhe apenas para a esquerda ou para a direita',

    // bot??o de cria????o de novo actor:
    'add a new sprite':
        'adicionar um novo ator',

    // ajuda nos tabuladores
    'costumes tab help':
        'Importa uma imagem de uma p??gina Web ou de um\n'
            + 'arquivo no teu computador arrastando-a para aqui',
    'import a sound from your computer\nby dragging it into here':
        'Importe um som de seu computador\narrastando-o para c??',

    // blocos primitivos:

    /*
        Attention Translators:
        ----------------------
        At this time your translation of block specs will only work
        correctly, if the order of formal parameters and their types
        are unchanged. Placeholders for inputs (formal parameters) are
        indicated by a preceding % prefix and followed by a type
        abbreviation.

        For example:

            'say %s for %n secs'

        can currently not be changed into

            'say %n secs long %s'

        and still work as intended.

        Similarly

            'point towards %dst'

        cannot be changed into

            'point towards %cst'

        without breaking its functionality.
    */

    // Movimento:
    'Stage selected:\nno motion primitives':
        'Palco selecionado:\nsem primitivas de movimento',


    'move %n steps':
        'mova %n passos',
    'turn %clockwise %n degrees':
        'gire %clockwise %n graus',
    'turn %counterclockwise %n degrees':
        'gire %counterclockwise %n graus',
    'point in direction %dir':
        'aponte para a dire????o %dir graus',
    'point towards %dst':
        'aponte para %dst',
    'go to x: %n y: %n':
        'v?? para x: %n y: %n ',
    'go to %dst':
        'v?? para %dst',
    'glide %n secs to x: %n y: %n':
        'deslize por %n segundos at?? x: %n y: %n ',
    'change x by %n':
        'adicione %n a x',
    'set x to %n':
        'mude x para %n',
    'change y by %n':
        'adicione %n a y',
    'set y to %n':
        'mude y para %n',
    'if on edge, bounce':
        'se tocar na borda, volte',
    'x position':
        'coordenada x da posi????o',
    'y position':
        'coordenada y da posi????o',
    'direction':
        'dire????o',

    // Apar??ncia:
    'switch to costume %cst':
        'mude para a fantasia %cst',
    'next costume':
        'pr??xima fantasia',
    'costume #':
        'n?? da fantasia',
    'say %s for %n secs':
        'diga %s por %n segundos',
    'say %s':
        'diga %s',
    'think %s for %n secs':
        'pense %s por %n segundos',
    'think %s':
        'pense %s',
    'Hello!':
        'Ol??!',
    'Hmm...':
        'Hmm???',
    'change %eff effect by %n':
        'adicione ao efeito %eff %n',
    'set %eff effect to %n':
        'mude o efeito %eff para %n',
    'clear graphic effects':
        'apague os efeitos gr??ficos',
    'change size by %n':
        'adicione %n ao seu tamanho',
    'set size to %n %':
        'mude o tamanho para %n %',
    'size':
        'tamanho',
    'show':
        'mostrar',
    'hide':
        'esconder',
    'go to front':
        'v?? para a frente',
    'go back %n layers':
        'v?? %n camadas para tr??s',

    'development mode \ndebugging primitives:':
        'primitivas de depura????o \ndo modo de desenvolvimento:',
    'console log %mult%s':
        'registre %mult%s no console',
    'alert %mult%s':
        'mostre janela de alerta com %mult%s',

    // Som:
    'play sound %snd':
        'toque o som %snd',
    'play sound %snd until done':
        'toque o som %snd at?? o fim',
    'stop all sounds':
        'pare todos os sons',
    'play sound %snd at %rate Hz':
        'toque o som %snd em %rate Hz',
    '%aa of sound %snd':
        '%aa do som %snd',
    'new sound %l rate %rate Hz':
        'nova %l com taxa de som de %rate Hz',
    'rest for %n beats':
        'sil??ncio por %n batidas',
    'play note %note for %n beats':
        'toque a nota %note durante %n batidas',
    'change tempo by %n':
        'adicione %n tempos/bpm ao andamento',
    'set tempo to %n bpm':
        'mude o andamento para %n tempos/bpm',
    'tempo':
        'andamento',
    'set instrument to %inst':
        'mude o instrumento para %inst',
    'change volume by %n':
        'adicione %n ao volume',
    'set volume to %n %':
        'mude o volume para %n %',
    'change balance by %n':
        'adicione %n ao balan??o',
    'set balance to %n':
        'mude o balan??o para %n',
    'balance':
        'balan??o',
    'volume':
        'volume',
    'play frequency %n Hz':
        'reproduzir frequ??ncia de %n Hz',
    'stop frequency':
        'parar a frequ??ncia',

    // %inst values for (set instrument to %inst):
    '(1) sine':
        '(1) \u223F\u223F (onda senoidal)',
    '(2) square':
        '(2) \u238D\u238D (onda quadrada)',
    '(3) sawtooth':
        '(3) \u2A58\u2A58 (onda dentada)',
    '(4) triangle':
        '(4) \u22C0\u22C0 (onda triangular)',

    // Caneta:
    'clear':
        'apague tudo',
    'pen down':
        'abaixe a caneta',
    'pen up':
        'levante a caneta',
    'set pen color to %clr':
        'mude a cor da caneta para %clr',
    'change pen color by %n':
        'adicione %n ?? cor da caneta',
    'set pen color to %n':
        'mude a cor da caneta para %n',
    'change pen shade by %n':
        'adicione %n ?? intensidade da caneta',
    'set pen shade to %n':
        'mude a intensidade da caneta para %n',
    'change pen size by %n':
        'adicione %n ?? espessura da caneta',
    'set pen size to %n':
        'mude a espessura da caneta para %n',
    'stamp':
        'carimbe',
    'fill':
        'preencha',
    'pen down?':
        'caneta abaixada?',
    'change pen %clrdim by %n':
        'adicione ao/?? %clrdim da caneta o valor %n',
    'set pen %clrdim to %n':
        'mude o/a %clrdim da caneta para %n',
    'write %s size %n':
        'escreva %s com tamanho %n',
    'pen %pen':
        '%pen da caneta',
    'paste on %spr':
        'cole sobre %spr',
    'cut from %spr':
        'recorte de %spr',

    // Eventos e Controle:
    'when %greenflag clicked':
        'quando clicar em %greenflag',
    'when %keyHat key pressed %keyName':
        'quando a tecla %keyHat for pressionada %keyName',
    'when I am %interaction':
        'quando eu for %interaction',
    'when %b':
        'quando %b',
    'when I receive %msgHat %message':
        'quando receber %msgHat %message',
    'broadcast %msg %receive':
        'envie %msg %receive',
    'broadcast %msg %receive and wait':
        'envie %msg %receive e aguarde',
    'to':
        'a',
    'Message name':
        'nome da mensagem',
    'message':
        'mensagem',
    'any message':
        'qualquer mensagem',
    'wait %n secs':
        'aguarde %n segundos',
    'wait until %b':
        'aguarde at?? que %b',
    'forever %loop':
        'sempre %loop',
    'repeat %n %loop':
        'repita %n vezes %loop',
    'repeat until %b %loop':
        'repita at?? que %b %loop',
    'for %upvar = %n to %n %cla':
        'repita de %upvar = %n a %n %cla',
    'if %b %c':
        'se %b ent??o %c',
    'if %b %c else %c':
        'se %b ent??o %c sen??o %c',
    'if %b then %s else %s':
        'se %b ent??o %s sen??o %s',
    'report %s':
        'reporte %s',
    'stop %stopChoices':
        'pare %stopChoices',
    'all':
        'tudo',
    'this script':
        'este roteiro',
    'this block':
        'este bloco',
    'stop %stopOthersChoices':
        'pare %stopOthersChoices',
    'all but this script':
        'todos os roteiros exceto este',
    'other scripts in sprite':
        'outros roteiros deste ator',
    'pause all %pause':
        'pause tudo %pause',
    'run %cmdRing %inputs':
        'execute %cmdRing %inputs',
    'launch %cmdRing %inputs':
        'inicie execu????o de %cmdRing %inputs',
    'call %repRing %inputs':
        'chame %repRing %inputs',
    'tell %spr to %cmdRing %inputs':
        'diga a %spr que %cmdRing %inputs',
    'ask %spr for %repRing %inputs':
        'pergunte a %spr por %repRing %inputs',
    'run %cmdRing w/continuation':
        'execute %cmdRing com continua????o',
    'call %cmdRing w/continuation':
        'chame %cmdRing com continua????o',
    'warp %c':
        'execute atomicamente %c',
    'when I start as a clone':
        'quando este ator come??ar como clone',
    'create a clone of %cln':
        'crie clone de %cln',
    'a new clone of %cln':
        'um novo clone de %cln',
    'myself':
        'este ator',
    'delete this clone':
        'apague este clone',
    'send %msg to %spr':
        'enviar %msg a %spr',

    // Sensores:
    'touching %col ?':
        'tocando em %col',
    'touching %clr ?':
        'tocando na cor %clr',
    'color %clr is touching %clr ?':
        'a cor %clr est?? tocando na cor %clr',
    'ask %s and wait':
        'pergunte %s e aguarde a resposta',
    'what\'s your name?':
        'qual ?? o seu nome?',
    'answer':
        'resposta',
    'mouse x':
        'posi????o x do mouse',
    'mouse y':
        'posi????o y do mouse',
    'mouse down?':
        'mouse pressionado?',
    'key %key pressed?':
        'tecla %key pressionada?',
    'distance to %dst':
        'dist??ncia at?? %dst',
    'reset timer':
        'zere o cron??metro',
    'timer':
        'valor do cron??metro',
    '%att of %spr':
        '%att de %spr',
    'http:// %s':
        'p??gina http:// %s',
    'turbo mode?':
        'modo turbo?',
    'set turbo mode to %b':
        'mude o modo turbo para %b',

    'filtered for %clr':
        'filtrado por %clr',
    'stack size':
        'altura da pilha',
    'frames':
        'quadros',

    // Operadores:
    '%n mod %n':
        'resto de %n por %n',
    'round %n':
        'arredondamento de %n',
    '%fun of %n':
        '%fun de %n',
    'pick random %n to %n':
        'aleat??rio entre %n e %n',
    '%b and %b':
        '%b e %b',
    '%b or %b':
        '%b ou %b',
    'not %b':
        'n??o %b',
    'true':
        'verdadeiro',
    'false':
        'falso',
    'join %words':
        'junte %words',
    'split %s by %delim':
        'separe %s por %delim',
    'hello':
        'Ol??',
    'world':
        'mundo',
    'letter %idx of %s':
        'o caractere %idx de %s',
    'length of %s':
        'o comprimento de %s',
    'unicode of %s':
        'o c??digo Unicode do caractere %s',
    'unicode %n as letter':
        'o caractere cujo c??digo Unicode ?? %n',
    'is %s a %typ ?':
        '%s ?? um/uma %typ',
    'is %s identical to %s ?':
        '%s ?? id??ntico a %s',

    'type of %s':
        'o tipo de %s',

    // Vari??veis:
    'Make a variable':
        'Criar uma vari??vel',
    'Variable name':
        'Nome da vari??vel',
    'Script variable name':
        'Nome da vari??vel de C??digo',
    'Delete a variable':
        'Remova uma vari??vel',

    'set %var to %s':
        'mude %var para %s',
    'change %var by %n':
        'adicione a %var o valor %n',
    'show variable %var':
        'mostre vari??vel %var',
    'hide variable %var':
        'esconda vari??vel %var',
    'script variables %scriptVars':
        'crie as vari??veis de roteiro %scriptVars',
    'inherit %shd':
        'herde %shd',

    // listas:
    'list %exp':
        'lista %exp',
    'numbers from %n to %n':
        'n??meros entre %n e %n',
    '%s in front of %l':
        '%s em frente a %l',
    'item %idx of %l':
        'item %idx de %l',
    'all but first of %l':
        'todos os itens de %l menos o primeiro',
    'length of %l':
        'tamanho de %l',
    '%l contains %s':
        '%l cont??m %s',
    'thing':
        'valor',
    'add %s to %l':
        'adicione %s a %l',
    'delete %ida of %l':
        'apague %ida de %l',
    'insert %s at %idx of %l':
        'insira %s na posi????o %idx em %l',
    'replace item %idx of %l with %s':
        'substitua o item %idx de %l por %s',
    'index of %s in %l':
        '??ndice do item %s em %l',
    'is %l empty?':
        '%l vazia?',
    'map %repRing over %l':
        'mapear %repRing sobre %l',
    'keep items %predRing from %l':
        'manter/filtrar os itens que satisfa??am %predRing de %l',
    'find first item %predRing in %l':
        'encontrar primeiro item que satisfa??a %predRing em %l',
    'combine %l using %repRing':
        'combinar/reduzir os itens de %l com %repRing',
    'for each %upvar in %l %cla':
        'repita para cada %upvar de %l %cla',
    'append %lists':
        'concatene %lists',
    'reshape %l to %nums':
        'altere as dimens??es de %l para %nums',

    // Outros
    'Make a block':
        'Criar um bloco',

    // Menus
    // Snap menu
    'About...':
        'Sobre o PatruLINO!!???',
    'Reference manual':
        'Manual de Refer??ncia',
    'Snap! website':
        'Site do Snap!',
    'Download source':
        'Baixar c??digo fonte',
    'Switch back to user mode':
        'Volte ao modo de usu??rio',
    'disable deep-Morphic\ncontext menus\nand show user-friendly ones':
        'Desative menus de contexto\nprofundos do Morphic e\nmostrar menus amig??veis.',
    'Switch to dev mode':
        'Mude para modo de desenvolvimento',
    'enable Morphic\ncontext menus\nand inspectors,\nnot user-friendly!':
        'Ativar menus de contexto\ne inspectores n??o\namig??veis do Morphic!',

    // Menu de projeto
    'Project notes...':
        'Notas deste projeto???',
    'New':
        'Criar um novo projeto',
    'Open...':
        'Abrir um projeto???',
    'Save':
        'Salvar',
    'Save As...':
        'Salvar como???',
    'Import...':
        'Importar???',
    'file menu import hint':
        'Importar para este projecto\num projeto exportado,\n'
            + 'uma biblioteca de blocos,\n'
            + 'um traje ou um som.',
    'Export project as plain text...':
        'Exportar este projeto em modo texto???',
    'Export project...':
        'Exportar este projeto???',
    'Export summary...':
        'Exportar resumo...',
    'show project data as XML\nin a new browser window':
        'Mostrar os dados no\nformato XML numa nova janela do navegador.',
    'Export blocks...':
        'Exportar blocos???',
    'show global custom block definitions as XML\nin a new browser window':
        'Mostrar as defini????es globais de blocos\npersonalizados no formato\nXML numa nova janela do navegador.',
    'Import tools':
        'Importar ferramentas oficiais',
    'load the official library of\npowerful blocks':
        'Importar a biblioteca\n oficial de blocos.',
    'Libraries...':
        'Bibliotecas...',
    'Import library':
        'Importar biblioteca',

    // Menu da nuvem
    'Login...':
        'Entrar na sua conta???',
    'Signup...':
        'Registar uma nova conta???',
    'Reset Password...':
        'Redefinir senha...',
    'Resend Verification Email...':
        'Reenviar e-mail de verifica????o...',
    'Logout':
        'Encerrar sess??o',
    'Change Password...':
        'Alterar senha',
    'Open in Community Site':
        'Abrir no site da comunidade',

    // menu de prefer??ncias
    'Language...':
        'L??ngua???',
    'Zoom blocks...':
        'Tamanho dos blocos???',
    'Fade blocks...':
        'N??vel de transpar??ncia dos blocos...',
    'Stage size...':
        'Tamanho do palco...',
    'Microphone resolution...':
        'Resolu????o do microfone...',
    'JavaScript extensions':
        'Extens??es do JavaScript',
    'Blurred shadows':
        'Sombras borradas',
    'uncheck to use solid drop\nshadows and highlights':
        'Desmarque para usar sombras\ne realces n??tidos.',
    'check to use blurred drop\nshadows and highlights':
        'Marque para usar sombras\ne realces borrados.',
    'Zebra coloring':
        'Colora????o em zebra',
    'check to enable alternating\ncolors for nested blocks':
        'Marque para alternar\nas cores de blocos aninhados.',
    'uncheck to disable alternating\ncolors for nested block':
        'Desmarque para deixar de alternar\nas cores de blocos aninhados.',
    'Dynamic input labels':
        'Nomes de entrada din??micos',
    'uncheck to disable dynamic\nlabels for variadic inputs':
        'Desmarque para desativar nomes\ndin??micos nas vari??veis de entrada.',
    'check to enable dynamic\nlabels for variadic inputs':
        'Marque para ativar nomes\ndin??micos nas vari??veis de entrada.',
    'Prefer empty slot drops':
        'Procure encaixar blocos de valor (rep??rteres) em campos vazios ao soltar',
    'settings menu prefer empty slots hint':
        'Marque para focar em campos vazios\nquando  estiver arrastando e '
            + 'soltando blocos de valor (rep??rteres).',
    'uncheck to allow dropped\nreporters to kick out others':
        'Desmarque para permitir que blocos\nrep??rteres soltos em um campo '
            + 'desalojem outros.',
    'Long form input dialog':
        'Forma longa da caixa de di??logo dos par??metros',
    'Plain prototype labels':
        'Textos simples nos prot??tipos dos blocos',
    'uncheck to always show (+) symbols\nin block prototype labels':
        'Desmarque para mostrar sempre os s??mbolos (+)\nno texto dos prot??tipos dos blocos',
    'check to hide (+) symbols\nin block prototype labels':
        'Marque para esconder os s??mbolos (+)\nno texto dos prot??tipos dos blocos',
    'check to always show slot\ntypes in the input dialog':
        'Marque para sempre mostrar\no tipo dos campos na caixa\nde di??logo dos par??metros.',
    'uncheck to use the input\ndialog in short form':
        'Desmarque para usar texto abreviado\nda caixa de di??logo dos par??metros.',
    'Virtual keyboard':
        'Teclado virtual',
    'uncheck to disable\nvirtual keyboard support\nfor mobile devices':
        'Desmarque para desativar o\nsuporte ao teclado virtual\npara dispositivos '
            + 'm??veis.',
    'check to enable\nvirtual keyboard support\nfor mobile devices':
        'Marque para ativar o\nsuporte ao teclado virtual\npara dispositivos '
            + 'm??veis.',
    'Input sliders':
        'Sliders nos campos de entrada',
    'uncheck to disable\ninput sliders for\nentry fields':
        'Desmarque para desativar\nsliders nos campos de entrada dos blocos.',
    'check to enable\ninput sliders for\nentry fields':
        'Marque para ativar\nsliders nos campos de entrada dos blocos.',
    'Clicking sound':
        'Som de cliques',
    'uncheck to turn\nblock clicking\nsound off':
        'Desmarque para desativar o som\nproduzido ao clicar nos blocos.',
    'check to turn\nblock clicking\nsound on':
        'Marque para ativar o som\nproduzido ao clicar nos blocos.',
    'Animations':
        'Anima????es',
    'uncheck to disable\nIDE animations':
        'Desmarque para desativar\nas anima????es da interface de usu??rio.',
    'Turbo mode.':
        'Modo turbo',
    'check to prioritize\nscript execution':
        'Marque para priorizar\na execu????o de roteiros.',
    'uncheck to run scripts\nat normal speed':
        'Desmarque para executar os roteiros\nna velocidade normal.',
    'check to enable\nIDE animations':
        'Marque para ativar\nas anima????es da interface de usu??rio.',
    'Thread safe scripts':
        'C??digos seguros relativos a threads',
    'uncheck to allow\nscript reentrance':
        'Desmarque para permitir\nreentr??ncia nos roteiros.',
    'check to disallow\nscript reentrance':
        'Marque para n??o permitir\nreentr??ncia nos roteiros.',
    'Prefer smooth animations':
        'Prefira anima????es suaves',
    'Flat line ends':
        'Extremos de linhas retos',
    'uncheck for round ends of lines':
        'desmarque para desenhar\nlinhas com extremos arredondados',
    'check for flat ends of lines':
        'marque para desenhar\nlinhas com extremos retos',
    'uncheck for greater speed\nat variable frame rates':
        'Desmarque para aumentar a velocidade\npermitindo ritmos vari??veis das tramas nas anima????es.',
    'check for smooth, predictable\nanimations across computers':
        'Marque para obter anima????es mais suaves\ne previs??veis de computador para computador.',
    'Visible stepping':
        'Depura????o passo a passo',
    'uncheck to turn off\nvisible stepping':
        'desmarque para desativar\na depura????o passo a passo',
    'check to turn on\n visible stepping (slow)':
        'marque para ativar\na depura????o passo a passo (lento)',
    'Log pen vectors':
        'Registrar os vetores da caneta',
    'log pen vectors':
        'registro dos vetores da caneta',
    'Hyper blocks support':
        'Suporte a hiper-blocos',
    'uncheck to disable\nusing operators on lists and tables':
        'desmarque para desabilitar\no uso de operadores em listas e tabelas',
    'check to enable\nusing operators on lists and tables':
        'marque para habilitar\no uso de operadores em listas e tabelas',
    'Turbo mode':
        'Modo turbo',
    'turbo mode':
        'modo turbo',

    // Entradas
    'with inputs':
        'com argumentos',
    'input names:':
        'com par??metros',
    'Input Names:':
        'Par??metros:',
    'input list:':
        'lista de entradas',

    // menus de contexto:
    'help':
        'ajuda',

    // palette:
    'hide primitives':
        'esconda blocos primitivos',
    'show primitives':
        'mostre blocos primitivos',

    // blocos:
    'help...':
        'ajuda???',
    'relabel...':
        'renomear???',
    'duplicate':
        'duplicar',
    'make a copy\nand pick it up':
        'Fa??a uma c??pia do\nbloco e pegue-a.',
    'only duplicate this block':
        'Duplique apenas este bloco.',
    'delete':
        'apague',
    'script pic...':
        'fotografia do roteiro',
    'open a new window\nwith a picture of this script':
        'Abra uma nova janela com\numa fotografia deste roteiro.',
    'ringify':
        'adicione anel',
    'unringify':
        'apague anel',

    // blocos personalizados:
    'delete block definition...':
        'remova defini????o do bloco???',
    'edit...':
        'editar???',

    // Atores:
    'edit':
        'editar',
    'detach from':
        'desencaixe de',
    'detach all parts':
        'desencaixe todas as partes',
    'export...':
        'exportar???',

    // palco:
    'show all':
        'mostre todos os atores',
    'pic...':
        'fotografia???',
    'open a new window\nwith a picture of the stage':
        'Abrir uma nova janela com\numa fotografia do palco.',

    // ??rea de Roteiros:
    'clean up':
        'limpar',
    'arrange scripts\nvertically':
        'Organize roteiros\nverticalmente.',
    'add comment':
        'adicione um coment??rio',
    'undrop':
        'desfa??a posicionamento',
    'undo the last\nblock drop\nin this pane':
        'Desfazer o ??ltimo posicionamento de um bloco\nneste painel.',
    'scripts pic...':
        'fotografe os roteiros???',
    'open a new window\nwith a picture of all scripts':
        'Abra uma nova janela com\numa fotografia de todos os roteiros.',
    'make a block...':
        'crie um bloco???',

    // Fantasias:
    'rename':
        'renomear',
    'export':
        'exportar',
    'rename costume':
        'Qual o novo nome da fantasia?',

    // Sons
    'Play sound':
        'Toque som.',
    'Stop sound':
        'Pare som.',
    'Stop':
        'Parar',
    'Play':
        'Tocar',
    'rename sound':
        'Qual o novo nome do som?',

    // Caixas de di??logo
    // bot??es
    'OK':
        'OK',
    'Ok':
        'OK',
    'Cancel':
        'Cancela',
    'Yes':
        'Sim',
    'No':
        'N??o',

    // ajuda
    'Help':
        'Ajuda',

    // amplia????o de blocos
    'Zoom blocks':
        'Zoom dos blocos',
    'build':
        'construa',
    'your own':
        'os seus pr??prios',
    'blocks':
        'blocos',
    'normal (1x)':
        'normal (1x)',
    'demo (1.2x)':
        'demonstra????o (1.2x)',
    'presentation (1.4x)':
        'apresenta????o (1.4x)',
    'big (2x)':
        'grande (2x)',
    'huge (4x)':
        'enorme (4x)',
    'giant (8x)':
        'gigante (8x)',
    'monstrous (10x)':
        'monstruoso (10x)',

    // Gestor de Projetos
     'Untitled':
        'Sem t??tulo',
    'Open Project':
        'Abrir Projeto',
    '(empty)':
        '(vazio)',
    'Saved!':
        'Salvo!',
    'Delete Project':
        'Apague Projeto',
    'Are you sure you want to delete':
        'Tem certeza que deseja apagar?',
    'rename...':
        'alterar o nome???',

    // Editor de fantasias
    'Costume Editor':
        'Editor de Fantasias',
    'click or drag crosshairs to move the rotation center':
        'Clique ou arraste a mira para mudar o centro de rota????o.',

    // Anotaes de projeto
    'Project Notes':
        'Notas do Projeto',

    // Novo projeto
    'New Project':
        'Novo Projeto',
    'Replace the current project with a new one?':
        'Substituir este projeto por um novo projeto?',

    // guardar projecto
    'Save Project As...':
        'Salvar Projeto Como???',

    // exportar blocos
    'Export blocks':
        'Exportar blocos',
    'Import blocks':
        'Importar blocos',
    'this project doesn\'t have any\ncustom global blocks yet':
        'Este projeto ainda n??o possui\nnenhum bloco global personalizado.',
    'select':
        'selecionar',
    'none':
        'nenhum',

    // Caixa de di??logo de vari??veis
    'for all sprites':
        'para todos os atores',
    'for this sprite only':
        'apenas para este ator',

    // caixa de di??logo de blocos
    'Change block':
        'Altere o tipo do bloco',
    'Command':
        'Comando',
    'Reporter':
        'Rep??rter',
    'Predicate':
        'Predicado',

    // editor de blocos
    'Block Editor':
        'Editor de Blocos',
    'Apply':
        'Aplicar',

    // caixa de di??logo de remo????o de bloco
    'Delete Custom Block':
        'Remova Bloco Personalizado',
    'block deletion dialog text':
        'Quer mesmo remover este bloco e '
            + 'todas as suas aplica????es?',

    // export project as... dialog
    'Export Project As...':
        'Exportar projeto como...',

    // Caixa de di??logo de par??metros
    'Create input name':
        'Criar par??metro',
    'Edit input name':
        'Editar par??metro',
    'Edit label fragment':
        'Editar r??tulo',
    'Title text':
        'Nome',
    'Input name':
        'Par??metro',
    'Delete':
        'Remover',
    'Object':
        'Objeto',
    'Number':
        'N??mero',
    'Text':
        'Texto',
    'List':
        'Lista',
    'Any type':
        'Qualquer tipo',
    'Boolean (T/F)':
        'Booleano (V/F)',
    'Command\n(inline)':
        'Comando\n(em linha)',
    'Command\n(C-shape)':
        'Comando\n(bloco de repeti????o)',
    'Any\n(unevaluated)':
        'Rep??rter\n(forma especial)',
    'Boolean\n(unevaluated)':
        'Predicado\n(forma especial)',
    'Single input.':
        'Par??metro ??nico.',
    'Default Value:':
        'Valor em caso de omiss??o (default):',
    'Multiple inputs (value is list of inputs)':
        'M??ltiplos argumentos (o valor do par??metro ?? a lista dos argumentos).',
    'Upvar - make internal variable visible to caller':
        'Tornar o par??metro vis??vel ao invocador.',

    // Acerca do Snap
    'About Snap':
        'Sobre o PatruLINO!!',
    'Back...':
        'Para tr??s???',
    'License...':
        'Licen??a???',
    'Modules...':
        'M??dulos???',
    'Credits...':
        'Cr??ditos???',
    'Translators...':
        'Tradutores???',
    'License':
        'Licen??a',
    'current module versions:':
        'vers??es actuais dos m??dulos',
    'Contributors':
        'Contribuidores',
    'Translations':
        'Tradu????es',

    // observadores de vari??veis
    'normal':
        'normal',
    'large':
        'grande',
    'slider':
        'slider',
    'slider min...':
        'm??nimo do slider???',
    'slider max...':
        'm??ximo do slider???',
    'import...':
        'importar???',
    'Slider minimum value':
        'Valor m??nimo do potenci??metro deslizante',
    'Slider maximum value':
        'Valor m??ximo do potenci??metro deslizante',

    // observadores de listas
    'length: ':
        'tamanho: ',

    // coment??rios
    'add comment here...':
        'coloque aqui um coment??rio???',

    // drop downs
    // direc????es
    '(90) right':
        '90?? (direita ou leste)',
    '(-90) left':
        '-90?? (esquerda ou oeste)',
    '(0) up':
        '0?? (cima ou norte)',
    '(180) down':
        '180?? (baixo ou sul)',
    'random':
        'aleat??ria',

    // detec????o de colis??es
    'mouse-pointer':
        'ponteiro do mouse',
    'edge':
        'borda',
    'pen trails':
        'tra??os da caneta',

    // trajes
    'Turtle':
        'seta',
    'Empty':
        'vazio',

    // efeitos gr??ficos
    'ghost':
        'fantasma',

    // teclas
    'space':
        'espa??o',
    'up arrow':
        'seta para cima',
    'down arrow':
        'seta para baixo',
    'right arrow':
        'seta para a direita',
    'left arrow':
        'seta para a esquerda',
    'any key':
        'qualquer tecla',
    'a':
        'a',
    'b':
        'b',
    'c':
        'c',
    'd':
        'd',
    'e':
        'e',
    'f':
        'f',
    'g':
        'g',
    'h':
        'h',
    'i':
        'i',
    'j':
        'j',
    'k':
        'k',
    'l':
        'l',
    'm':
        'm',
    'n':
        'n',
    'o':
        'o',
    'p':
        'p',
    'q':
        'q',
    'r':
        'r',
    's':
        's',
    't':
        't',
    'u':
        'u',
    'v':
        'v',
    'w':
        'w',
    'x':
        'x',
    'y':
        'y',
    'z':
        'z',
    '0':
        '0',
    '1':
        '1',
    '2':
        '2',
    '3':
        '3',
    '4':
        '4',
    '5':
        '5',
    '6':
        '6',
    '7':
        '7',
    '8':
        '8',
    '9':
        '9',

    // %interaction values for (when I am %interaction):
    // In portuguese read as "quando eu for %interaction"
    'clicked':
        'clicado',
    'pressed':
        'pressionado',
    'dropped':
        'arrastado e solto',
    'mouse-entered':
        'tocado com o mouse',
    'mouse-departed':
        'deixado de ser tocado com o mouse',
    'scrolled-up':
        'girado com a roda do mouse para baixo',
    'scrolled-down':
        'girado com a roda do mouse para cima',
    'stopped':
        'parado',

    // messagens
    'new...':
        'Nova???',

    // fun????es matem??ticas
    'abs':
        'valor absoluto',
    'ceiling':
        'arredondamento para cima (teto)',
    'floor':
        'arredondamento para baixo (piso)',
    'sqrt':
        'raiz quadrada',
    'sin':
        'seno',
    'cos':
        'cosseno',
    'tan':
        'tangente',
    'asin':
        'arco-seno',
    'acos':
        'arco-cosseno',
    'atan':
        'arco-tangente',
    'ln':
        'logaritmo natural',
    'e^':
        'exponencial',

    // delimitadores
    'whitespace':
        'espa??os em branco',
    'line':
        'avan??os de linha',
    'tab':
        'tabuladores',
    'cr':
        'retornos',

    // tipos de dados
    'number':
        'n??mero',
    'text':
        'texto',
    'Boolean':
        'booleano',
    'list':
        'lista',
    'command':
        'comando',
    'reporter':
        'rep??rter',
    'predicate':
        'predicado',
    'costume':
        'fantasia',
    'sound':
        'som',

    // ??ndices de listas
    'last':
        '??ltimo item',
    'any':
        'qualquer (aleat??rio)',

    // em falta no ficheiro lang-de.js
    'costume name':
        'nome da fantasia',
    'Open':
        'Abrir',
    'Share':
        'Compartilhar',
    'Cloud':
        'Nuvem',
    'Browser':
        'Navegador',
    'Sign up':
        'Registrar nova conta',
    'Sign in':
        'Entrar',
    'now connected.':
        'entrou.',
    'disconnected.':
        'saiu.',
    'Reset password':
        'Recuperar senha',
    'Reset Password...':
        'Recuperar a sua senha...',
    'User name:':
        'Nome de usu??rio:',
    'Password:':
        'Senha:',
    'Birth date:':
        'Data de nascimento:',
    'January':
        'Janeiro',
    'February':
        'Fevereiro',
    'March':
        'Mar??o',
    'April':
        'Abril',
    'May':
        'Maio',
    'June':
        'Junho',
    'July':
        'Julho',
    'August':
        'Agosto',
    'September':
        'Setembro',
    'October':
        'Outubro',
    'November':
        'Novembro',
    'December':
        'Dezembro',
    'year:':
        'ano:',
    ' or before':
        ' ou antes',
    'E-mail address:':
        'Endere??o de email:',
    'E-mail address of parent or guardian:':
        'Endere??o de encarregado de educa????o:',
    'Terms of Service...':
        'Termos do Servi??o???',
    'Privacy...':
        'Privacidade???',
    'I have read and agree\nto the Terms of Service':
        'Li e declaro concordar\ncom os Termos do Servi??o',
    'stay signed in on this computer\nuntil logging out':
        'manter-me autenticado neste\ncomputador at?? que saia',
    'please fill out\nthis field':
        'Por favor preencha\neste campo.',
    'User name must be four\ncharacters or longer':
        'O nome de usu??rio tem de ter\npelo menos quatro caracteres.',
    'please provide a valid\nemail address':
        'Por favor indique um endere??o\nde email v??lido.',
    'password must be six\ncharacters or longer':
        'A senha tem de ter\npelo menos seis caracteres.',
    'passwords do\nnot match':
        'As senhas\nn??o correspondem.',
    'please agree to\nthe TOS':
        'Por favor concorde com\nos Termos do Servi??o.',
    'Examples':
        'Exemplos',
    'You are not logged in':
        'Ainda n??o se autenticou',
    'Updating\nproject list...':
        'Atualizando a\nlista de projetos???',
    'Opening project...':
        'Abrindo o projeto???',
    'Fetching project from the cloud...':
        'Obtendo o projeto da nuvem???',
    'Saving project to the cloud...':
        'Salvando o projeto na nuvem???',
    'Sprite Nesting':
        'Atores aninhados',
    'uncheck to disable\nsprite composition':
        'Desmarque para desativar\na composi????o de atores.',
    'Codification support':
        'Suporte a produ????o de c??digo',
    'check for block\nto text mapping features':
        'Assinalar para funcionalidades\nde mapeamento entre blocos e texto.',
    'Save to disk':
        'Salvar no disco',
    'experimental - store this project\nin your downloads folder':
        'Experimental - Salvar este projeto\nna sua pasta de downloads.',
    'saved.':
        'salvo.',
    'options...':
        'op????es???',
    'read-only':
        'apenas leitura',
    'Input Slot Options':
        'Op????es de Campos de Entrada',
    'Enter one option per line.Optionally use "=" as key/value delimiter\ne.g.\n   the answer=42':
        'Entre com uma op????o por linha. Opcionalmente, use "=" como separador\nentre chave e valor, e.g.\n   a resposta=42',
    'paint a new sprite':
        'Desenhar um novo ator.',
    'Paint a new costume':
        'Desenhar uma nova fantasia.',
    'add a new Turtle sprite':
        'Adicionar um novo ator.',
    'Flat design':
        'Visual achatado',
    'check for alternative\nGUI design':
        'Marque para um design alternativo\nda interface gr??fica de usu??rio.',
    'Rasterize SVGs':
        'Transformar desenhos vetoriais (SVG) em mapas de bits',
    'check to rasterize\nSVGs on import':
        'Marque para transformar os arquivos vetoriais SVG\nem mapas de bits durante a importa????o.',
    'comment pic...':
        'fotografia do coment??rio???',
    'open a new window\nwith a picture of this comment':
        'Abrir uma nova janela com\numa foto deste coment??rio.',

    // %get values for (my %get):
    'neighbors':
        'vizinhos',
    'self':
        'eu mesmo',
    'other sprites':
        'outras sprites',
    'clones':
        'clones',
    'other clones':
        'outros clones',
    'parts':
        'partes',
    'anchor':
        '??ncoras',
    'stage':
        'palco',
    'children':
        'filhos',
    'parent':
        'pai',
    'temporary?':
        'tempor??rio?',
    'name':
        'nome',
    'costumes':
        'fantasias',
    'sounds':
        'sons',
    'dangling?':
        'penso?',
    'draggable?': 
        'arrast??vel?',
    'rotation style':
        'estilo de rota????o',
    'rotation x':
        'rota????o x',
    'rotation y':
        'rota????o y',
    'center x':
        'centro x',
    'center y':
        'centro y',

    // %dates values for (current %dates):
    'year':
        'ano',
    'month':
        'm??s',
    'date':
        'dia',
    'day of week':
        'daa da semana',
    'hour':
        'hora',
    'minute':
        'minuto',
    'second':
        'segundo',
    'time in milliseconds':
        'tempo en milisegundos',

    // Tradu????es adicionais:
    'saturation':
        'satura????o',
    'brightness':
        'brilho',
    'transparency':
        'transpar??ncia',
    'hue':
        'tonalidade',
    'random position':
        'posi????o aleat??ria',
    'center':
        'centro',
    'width':
        'largura',
    'height':
        'altura',
    'name':
        'nome',
    '%img of costume %cst':
        '%img da fantasia %cst',
    'current':
        'atual',
    'stretch %cst x: %n y: %n %':
        'estique a fantasia %cst em x: %n y: %n %',
    'new costume %l width %dim height %dim':
        'nova fantasia %l com largura %dim e altura %dim',
    'color':
        'cor',
    'fisheye':
        'olho de peixe',
    'whirl':
        'redemoinho',
    'pixelate':
        'pixelado',
    'mosaic':
        'mosaico',
    'negative':
        'negativo',
    '%eff effect':
        'efeito %eff',
    'shown?':
        'vis??vel?',
    'go to %layer layer':
        'v?? para camada %layer',
    'back':
        'traseira',
    'front':
        'dianteira',
    'distance':
        'dist??ncia',
    'ray length':
        'comprimento do raio',
    '%rel to %dst':
        '%rel at?? %dst',
    '%asp at %loc' :
        '%asp em %loc',
    'top':
        'superior',
    'bottom':
        'inferior',
    'left':
        'esquerda',
    'right':
        'direita',
    'balance':
        'balan??o',
    'volume':
        'volume',
    'my %get':
        'meu(s)/minha(s) %get',
    'object %self':
        'Objeto %self',
    'microphone %audio':
        '%audio do microfone',
    'frequency':
        'frequ??ncia',
    'duration':
        'dura????o',
    'number of channels':
        'n??mero de canais',
    'sample rate':
        'taxa de amostragem',
    'samples':
        'amostras',
    'spectrum':
        'espectro',
    'resolution':
        'resolu????o',
    'note':
        'nota',
    'video %vid on %self':
        '%vid do v??deo do(e) %self',
    'motion':
        'movimento',
    'snap':
        'captura instant??nea',
    'set video transparency to %n':
        'mude a transpar??ncia do v??deo para %n',
    'is %setting on?':
        'par??metro %setting ativo?',
    'set %setting to %b':
        'mude o par??metro %setting para %b',
    'flat line ends':
        'extremos de linhas retos',
    'current %dates':
        '%dates atual',
    'length':
        'comprimento',
    'rank':
        'ranking',
    'dimensions':
        'dimens??es',
    'flatten':
        'achatamento',
    'lines':
        'linhas',
    'columns':
        'colunas',
    'reverse':
        'reverso',
    'video capture':
        'captura de v??deo',
    'mirror video':
        'espelhamento de v??deo',
};
