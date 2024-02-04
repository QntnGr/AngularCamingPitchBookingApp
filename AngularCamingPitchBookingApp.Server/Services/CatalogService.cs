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

    public async Task<List<CampingPitch>> GetAll()
    {
        return await _dbContext.CampingPitches.ToListAsync();
    }

    public async Task<CampingPitch?> GetLastItem()
    {
        return await _dbContext.CampingPitches.OrderByDescending(cp => cp.Id).FirstOrDefaultAsync();
    }

    public async Task Insert(CampingPitch item)
    {
        // pas d'écriture en bdd
        // ma requête = Insert into
        await _dbContext.AddAsync(item);

        // exécution de l'insert
        await _dbContext.SaveChangesAsync();
    }

    public async Task UpadteImageUrlById(int id, string url)
    {
        await _dbContext.CampingPitches.Where(cp => cp.Id == id)
            .ExecuteUpdateAsync(setter => setter.SetProperty(item => item.ImageUrl, url));
    }
}