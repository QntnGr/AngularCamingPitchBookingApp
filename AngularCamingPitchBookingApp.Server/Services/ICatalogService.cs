using AngularCamingPitchBookingApp.Server.Entities;
using Microsoft.AspNetCore.Mvc;

namespace AngularCamingPitchBookingApp.Server.Services;

public interface ICatalogService
{
    Task Insert(CampingPitch item);
    List<CampingPitch> GetAll();
    CampingPitch GetLastItem();
    Task<int> DeleteById(int id);
    Task UpadteImageUrlById(int id, string url);
}

