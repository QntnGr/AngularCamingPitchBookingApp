﻿namespace AngularCamingPitchBookingApp.Server.Entities;

public class Booking
{
    public int Id { get; set; }
    public DateTime Start { get; set; }
    public DateTime End { get; set; }
    public int CampingPitchId { get; set; }
}
