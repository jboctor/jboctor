<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    public function home()
    {
        $number = random_int(0, 100);

        return $this->render('layout/base.html.twig', [
			'content' => 'Lucky number: ' . $number
		]);
    }
}