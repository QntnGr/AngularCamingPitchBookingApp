using AngularCamingPitchBookingApp.Server.Entities;
using AngularCamingPitchBookingApp.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace AngularCamingPitchBookingApp.Server.Controllers;


[ApiController]
[Route("[controller]")]
public class HomeController : ControllerBase
{

    private readonly ILogger<HomeController> _logger;
    private readonly ICatalogService _catalogService;

    public HomeController(ILogger<HomeController> logger, ICatalogService catalogService)
    {
        _logger = logger;
        _catalogService = catalogService;
    }

    [HttpGet]
    public IEnumerable<CampingPitch> Get()
    {
        return _catalogService.GetAll();
    }
}
