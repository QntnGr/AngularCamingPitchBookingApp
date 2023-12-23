using AngularCamingPitchBookingApp.Server.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using Constants = AngularCamingPitchBookingApp.Server.Helpers.Constants;

namespace AngularCamingPitchBookingApp.Server.Services;

public class BookingService : IBookingService
{
    readonly IHttpContextAccessor _httpContextAccessor;
    public BookingService(IHttpContextAccessor httpContextAccessor)
    {
        _httpContextAccessor = httpContextAccessor;
    }

    public OkObjectResult AddCookieBooking(Booking item)
    {
        string? currentDomain = _httpContextAccessor.HttpContext?.Request.Host.ToString().Split(':').FirstOrDefault();
        var options = new CookieOptions
        {
            Domain = currentDomain,
            Path = "/",
            HttpOnly = false,
            Secure = false,
            Expires = DateTime.Now.AddHours(1) //durée de vie du cookie en heure 
        };

        var cookieValue = JsonSerializer.Serialize(item);
        _httpContextAccessor.HttpContext?.Response.Cookies.Append(Constants.BookingCookiesName, cookieValue, options);

        return new OkObjectResult("Cookie Booking added.");
    }

}