<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BaseController extends AbstractController
{	
	/**
	 * Gets the view template based on the directory and renders it.
	 * 
	 * @param array $templateParameters
	 * 
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	protected function renderViewTemplate($templateParameters = [])
	{
		$directories = explode('/src/Controller', dirname(__FILE__));
		$templateDirectory = $directories[1];
		return $this->render(
			'layout/base.html.twig',
			array_merge(
				['content' => "$templateDirectory/home.html.twig"], // @TODO replace home.html.twig with classname.html.twig
				$templateParameters
			)
		);
	}
}