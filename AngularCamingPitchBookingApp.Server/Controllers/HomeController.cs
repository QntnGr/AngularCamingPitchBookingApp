using AngularCamingPitchBookingApp.Server.Entities;
using AngularCamingPitchBookingApp.Server.Services;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel;

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

    [HttpGet("GetAllCampingPitchCatalog")]
    public List<CampingPitch> Get()
    {
        return _catalogService.GetAll();
    }

    [HttpPost("InsertCampingPitchItem")]
    public CampingPitch Insert(CampingPitch item)
    {
        _catalogService.Insert(item);
        _logger.LogInformation($"item inserted : {item.Id}");
        return _catalogService.GetLastItem();
    }
}
