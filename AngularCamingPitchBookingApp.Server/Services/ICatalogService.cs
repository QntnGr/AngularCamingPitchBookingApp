using AngularCamingPitchBookingApp.Server.Entities;

namespace AngularCamingPitchBookingApp.Server.Services;

public interface ICatalogService
{
    void Insert(CampingPitch item);
    List<CampingPitch> GetAll();
}

