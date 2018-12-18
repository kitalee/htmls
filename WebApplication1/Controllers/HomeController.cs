using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        //[ChildActionOnly]
        //public ActionResult ChildActionTest(List<String> list) {
        //    return View(list);
        //}

        public IActionResult Amp()
        {
            return View();
        }

        public IActionResult Submit()
        {
            Response.Headers.Add("Access-Control-Allow-Origin", Request.Headers["Origin"]);
            Response.Headers.Add("AMP-Access-Control-Allow-Source-Origin", Request.Query["__amp_source_origin"]);
            Response.Headers.Add("Access-Control-Expose-Headers", "AMP-Access-Control-Allow-Source-Origin");
            Response.Headers.Add("Access-Control-Allow-Credentials", "true");

            return Json(new
            {
                CompanyId = Request.Form["CompanyId"],
                LoanPurpose = Request.Form["LoanPurpose"],
                LoanAmount = Request.Form["LoanAmount"],
                FirstName = Request.Form["FirstName"],
                LastName = Request.Form["LastName"],
                Location = Request.Form["Location"],
                PhoneNumber = Request.Form["PhoneNumber"],
                EmailAddress = Request.Form["EmailAddress"]
            });
            //return View();
        }

        public IActionResult Verify()
        {
            Response.Headers.Add("Access-Control-Allow-Origin", Request.Headers["Origin"]);
            Response.Headers.Add("AMP-Access-Control-Allow-Source-Origin", Request.Query["__amp_source_origin"]);
            Response.Headers.Add("Access-Control-Expose-Headers", "AMP-Access-Control-Allow-Source-Origin");
            Response.Headers.Add("Access-Control-Allow-Credentials", "true");

            return Json(new
            {
                CompanyId = Request.Form["CompanyId"],
                LoanPurpose = Request.Form["LoanPurpose"],
                LoanAmount = Request.Form["LoanAmount"],
                FirstName = Request.Form["FirstName"],
                LastName = Request.Form["LastName"],
                Location = Request.Form["Location"],
                PhoneNumber = Request.Form["PhoneNumber"],
                EmailAddress = Request.Form["EmailAddress"]
            });
            //return View();
        }
    }
}
