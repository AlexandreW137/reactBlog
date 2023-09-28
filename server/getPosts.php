<?php
// Permite solicitações de qualquer origem
header("Access-Control-Allow-Origin: *");
// Define outros cabeçalhos CORS, se necessário
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

header('Content-Type: application/json');

$post1 = array(
    'titulo' => 'Os benefícios da programação em Python',
    'imagem' => 'python.jpg',
    'descricao' => 'Python é uma linguagem de programação poderosa e versátil. Saiba por que muitos desenvolvedores escolhem Python e como essa linguagem pode impulsionar seus projetos de desenvolvimento de software.',
    'link' => 'readMore.php'
);

$post2 = array(
    'titulo' => 'As últimas tendências em tecnologia',
    'imagem' => 'tecnologia.jpg',
    'descricao' => 'Descubra as últimas tendências em tecnologia, incluindo inteligência artificial, realidade virtual, 5G e muito mais. Fique por dentro do que está moldando o futuro da indústria de tecnologia.',
    'link' => 'readMore.php'
);

$post3 = array(
    'titulo' => 'Como escolher o melhor laptop para suas necessidades',
    'imagem' => 'laptop.jpg',
    'descricao' => 'Está procurando um novo laptop? Este guia abrangente o ajudará a entender as especificações e recursos essenciais a serem considerados ao escolher o laptop perfeito para suas necessidades.',
    'link' => 'readMore.php'
);

$posts = array($post1, $post2, $post3);

echo json_encode($posts);
?>
