using AngularCamingPitchBookingApp.Server.Entities;
using AngularCamingPitchBookingApp.Server.Helpers;
using AngularCamingPitchBookingApp.Server.Services;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace AngularCamingPitchBookingApp.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class BasketController : ControllerBase
{

    private readonly ILogger<HomeController> _logger;
    private readonly IBookingService _bookingService;

    public BasketController(ILogger<HomeController> logger, IBookingService bookingService)
    {
        _logger = logger;
        _bookingService = bookingService;
    }

    [HttpPost(nameof(AddToBasket))]
    [ProducesResponseType(typeof(OkObjectResult), 200)]
    [ProducesResponseType(403)]
    public OkObjectResult AddToBasket(Booking booking)
    {
        _logger.LogInformation($"add booking");
        return _bookingService.AddCookieBooking(booking);
    }

    [HttpGet(nameof(GetBasketCookie))]
    [ProducesResponseType(typeof(Booking), 200)]
    [ProducesResponseType(403)]
    public Booking? GetBasketCookie()
    {
        if (Request.Cookies.TryGetValue(Constants.BookingCookiesName, out var valeurDuCookie))
        {
            return JsonSerializer.Deserialize<Booking>(valeurDuCookie);
        }
        return null;
    }
}