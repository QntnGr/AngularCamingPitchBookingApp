using AngularCamingPitchBookingApp.Server.Entities;
using AngularCamingPitchBookingApp.Server.Infrastruture;
using Microsoft.EntityFrameworkCore;

namespace AngularCamingPitchBookingApp.Server.Services;

public class CatalogService : ICatalogService
{
    readonly CatalogContext _dbContext;
    public CatalogService(CatalogContext catalogContext)
    {
        _dbContext = catalogContext;
    }

    public async Task<int> DeleteById(int id)
    {
        return await _dbContext.CampingPitches.Where(cp => cp.Id == id).ExecuteDeleteAsync();
    }

    public List<CampingPitch> GetAll()
    {
        return _dbContext.CampingPitches.ToList();
    }

    public CampingPitch GetLastItem()
    {
        return _dbContext.CampingPitches.OrderByDescending(cp => cp.Id).First();
    }

    public async Task Insert(CampingPitch item)
    {
        await _dbContext.AddAsync(item);
        await _dbContext.SaveChangesAsync();
    }

    public async Task UpadteImageUrlById(int id, string url)
    {
        await _dbContext.CampingPitches.Where(cp => cp.Id == id)
            .ExecuteUpdateAsync(setter => setter.SetProperty(item => item.ImageUrl, url));
    }
}