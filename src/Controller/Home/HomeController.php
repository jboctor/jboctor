<?php

namespace App\Controller\Home;

use App\Controller\BaseController;

class HomeController extends BaseController
{
	/**
	 * Function to render the view.
	 */
	public function home()
	{
		return $this->renderViewTemplate();
	}
}