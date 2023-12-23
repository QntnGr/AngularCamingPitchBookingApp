using AngularCamingPitchBookingApp.Server.Entities;
using AngularCamingPitchBookingApp.Server.Infrastruture;

namespace AngularCamingPitchBookingApp.Server.Services;

public class CatalogService : ICatalogService
{
    readonly CatalogContext _dbContext;
    public CatalogService(CatalogContext catalogContext)
    {
        _dbContext = catalogContext;
    }
    List<CampingPitch> ICatalogService.GetAll()
    {
        return _dbContext.CampingPitches.Select(ci => ci).ToList();
    }

    void ICatalogService.Insert(CampingPitch item)
    {
        _dbContext.Add(item);
        _dbContext.SaveChanges();
    }
}