/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { MbomItmObjDpnAssignment } from './MbomItmObjDpnAssignment';

/**
 * Request builder class for operations supported on the {@link MbomItmObjDpnAssignment} entity.
 */
export class MbomItmObjDpnAssignmentRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MbomItmObjDpnAssignment<T>, T> {
  /**
   * Returns a request builder for querying all `MbomItmObjDpnAssignment` entities.
   * @returns A request builder for creating requests to retrieve all `MbomItmObjDpnAssignment` entities.
   */
  getAll(): GetAllRequestBuilder<MbomItmObjDpnAssignment<T>, T> {
    return new GetAllRequestBuilder<MbomItmObjDpnAssignment<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for retrieving one `MbomItmObjDpnAssignment` entity based on its keys.
   * @param billOfMaterial Key property. See {@link MbomItmObjDpnAssignment.billOfMaterial}.
   * @param billOfMaterialCategory Key property. See {@link MbomItmObjDpnAssignment.billOfMaterialCategory}.
   * @param billOfMaterialVariant Key property. See {@link MbomItmObjDpnAssignment.billOfMaterialVariant}.
   * @param billOfMaterialVersion Key property. See {@link MbomItmObjDpnAssignment.billOfMaterialVersion}.
   * @param headerChangeDocument Key property. See {@link MbomItmObjDpnAssignment.headerChangeDocument}.
   * @param material Key property. See {@link MbomItmObjDpnAssignment.material}.
   * @param plant Key property. See {@link MbomItmObjDpnAssignment.plant}.
   * @param billOfMaterialItemNodeNumber Key property. See {@link MbomItmObjDpnAssignment.billOfMaterialItemNodeNumber}.
   * @param objectDependencyName Key property. See {@link MbomItmObjDpnAssignment.objectDependencyName}.
   * @returns A request builder for creating requests to retrieve one `MbomItmObjDpnAssignment` entity based on its keys.
   */
  getByKey(
    billOfMaterial: DeserializedType<T, 'Edm.String'>,
    billOfMaterialCategory: DeserializedType<T, 'Edm.String'>,
    billOfMaterialVariant: DeserializedType<T, 'Edm.String'>,
    billOfMaterialVersion: DeserializedType<T, 'Edm.String'>,
    headerChangeDocument: DeserializedType<T, 'Edm.String'>,
    material: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>,
    billOfMaterialItemNodeNumber: DeserializedType<T, 'Edm.String'>,
    objectDependencyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MbomItmObjDpnAssignment<T>, T> {
    return new GetByKeyRequestBuilder<MbomItmObjDpnAssignment<T>, T>(
      this.entityApi,
      {
        BillOfMaterial: billOfMaterial,
        BillOfMaterialCategory: billOfMaterialCategory,
        BillOfMaterialVariant: billOfMaterialVariant,
        BillOfMaterialVersion: billOfMaterialVersion,
        HeaderChangeDocument: headerChangeDocument,
        Material: material,
        Plant: plant,
        BillOfMaterialItemNodeNumber: billOfMaterialItemNodeNumber,
        ObjectDependencyName: objectDependencyName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MbomItmObjDpnAssignment`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MbomItmObjDpnAssignment`.
   */
  update(
    entity: MbomItmObjDpnAssignment<T>
  ): UpdateRequestBuilder<MbomItmObjDpnAssignment<T>, T> {
    return new UpdateRequestBuilder<MbomItmObjDpnAssignment<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MbomItmObjDpnAssignment`.
   * @param billOfMaterial Key property. See {@link MbomItmObjDpnAssignment.billOfMaterial}.
   * @param billOfMaterialCategory Key property. See {@link MbomItmObjDpnAssignment.billOfMaterialCategory}.
   * @param billOfMaterialVariant Key property. See {@link MbomItmObjDpnAssignment.billOfMaterialVariant}.
   * @param billOfMaterialVersion Key property. See {@link MbomItmObjDpnAssignment.billOfMaterialVersion}.
   * @param headerChangeDocument Key property. See {@link MbomItmObjDpnAssignment.headerChangeDocument}.
   * @param material Key property. See {@link MbomItmObjDpnAssignment.material}.
   * @param plant Key property. See {@link MbomItmObjDpnAssignment.plant}.
   * @param billOfMaterialItemNodeNumber Key property. See {@link MbomItmObjDpnAssignment.billOfMaterialItemNodeNumber}.
   * @param objectDependencyName Key property. See {@link MbomItmObjDpnAssignment.objectDependencyName}.
   * @returns A request builder for creating requests that delete an entity of type `MbomItmObjDpnAssignment`.
   */
  delete(
    billOfMaterial: string,
    billOfMaterialCategory: string,
    billOfMaterialVariant: string,
    billOfMaterialVersion: string,
    headerChangeDocument: string,
    material: string,
    plant: string,
    billOfMaterialItemNodeNumber: string,
    objectDependencyName: string
  ): DeleteRequestBuilder<MbomItmObjDpnAssignment<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MbomItmObjDpnAssignment`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MbomItmObjDpnAssignment` by taking the entity as a parameter.
   */
  delete(
    entity: MbomItmObjDpnAssignment<T>
  ): DeleteRequestBuilder<MbomItmObjDpnAssignment<T>, T>;
  delete(
    billOfMaterialOrEntity: any,
    billOfMaterialCategory?: string,
    billOfMaterialVariant?: string,
    billOfMaterialVersion?: string,
    headerChangeDocument?: string,
    material?: string,
    plant?: string,
    billOfMaterialItemNodeNumber?: string,
    objectDependencyName?: string
  ): DeleteRequestBuilder<MbomItmObjDpnAssignment<T>, T> {
    return new DeleteRequestBuilder<MbomItmObjDpnAssignment<T>, T>(
      this.entityApi,
      billOfMaterialOrEntity instanceof MbomItmObjDpnAssignment
        ? billOfMaterialOrEntity
        : {
            BillOfMaterial: billOfMaterialOrEntity!,
            BillOfMaterialCategory: billOfMaterialCategory!,
            BillOfMaterialVariant: billOfMaterialVariant!,
            BillOfMaterialVersion: billOfMaterialVersion!,
            HeaderChangeDocument: headerChangeDocument!,
            Material: material!,
            Plant: plant!,
            BillOfMaterialItemNodeNumber: billOfMaterialItemNodeNumber!,
            ObjectDependencyName: objectDependencyName!
          }
    );
  }
}
