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

    [HttpGet(nameof(GetAllCatalog))]
    public List<CampingPitch> GetAllCatalog()
    {
        return _catalogService.GetAll();
    }

    [HttpPost(nameof(InsertItem))]
    public async Task<CampingPitch> InsertItem(CampingPitch item)
    {
        await _catalogService.Insert(item);
        _logger.LogInformation($"inserted itemId: {item.Id}");
        return _catalogService.GetLastItem();
    }

    [HttpDelete(nameof(DeleteItemById))]
    public async Task<int> DeleteItemById(int id)
    {
        _logger.LogWarning($"deleted itemId: {id}");
        return await _catalogService.DeleteById(id);
    }

    [HttpPut(nameof(UpdateImageUrlById))]
    public async Task UpdateImageUrlById(int id, string url)
    {
        _logger.LogWarning($"update ImageUrl: {url} | itemId: {id}");
        await _catalogService.UpadteImageUrlById(id, url);
    }
}
