using AngularCamingPitchBookingApp.Server.Entities;
using Microsoft.AspNetCore.Mvc;

namespace AngularCamingPitchBookingApp.Server.Services;

public interface IBookingService
{
    OkObjectResult AddCookieBooking(Booking item);
}
