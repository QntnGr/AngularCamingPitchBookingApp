using AngularCamingPitchBookingApp.Server.Entities;
using Microsoft.AspNetCore.Mvc;

namespace AngularCamingPitchBookingApp.Server.Services;

public interface ICatalogService
{
    Task Insert(CampingPitch item);
    Task<List<CampingPitch>> GetAll();
    Task<CampingPitch?> GetLastItem();
    Task<int> DeleteById(int id);
    Task UpadteImageUrlById(int id, string url);
}

